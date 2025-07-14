import React, { useEffect, useState } from 'react';
import { getDetails } from '../../blockchain/instances/contract';
// import '../../dashboard/Referral/Referral.css';

const packageNames = [
  'Opera Mass 20',
  'Morreal Mass 50',
  'Jadore Mass 100',
  'Shumuk Mass 500',
  'Million Luxe Mass 1000',
  'Majestic Mass 5000',
];

const packageTypes = [20, 50, 100, 500, 1000, 5000];

function shortenAddress(addr) {
  if (!addr) return '';
  return addr.slice(0, 6) + '...' + addr.slice(-3);
}

const ReferralTree = ({ address }) => {
  const [selectedPackageIdx, setSelectedPackageIdx] = useState(0); // default to $20
  const [tree, setTree] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const packageType = packageTypes[selectedPackageIdx];
  const packageName = packageNames[selectedPackageIdx];

  useEffect(() => {
    if (!address) return;
    setLoading(true);
    setError('');
    if (packageType === 20) {
      buildBinaryTree(address, "It's Me", packageType)
        .then(root => setTree(root))
        .catch(() => setError('Failed to fetch referral tree'))
        .finally(() => setLoading(false));
    } else {
      buildLevelTreeForOtherPackages(address, "It's Me", packageType)
        .then(root => setTree(root))
        .catch(() => setError('Failed to fetch referral tree'))
        .finally(() => setLoading(false));
    }
  }, [address, packageType]);

  async function buildBinaryTree(address, code, packageType, depth = 0) {
    try {
      const maxDepth = (packageType === 20 || packageType === 50) ? 5 : 10;
      if (depth >= maxDepth) {
        return {
          address,
          code,
          children: [null, null],
        };
      }
      const [addresses, codes] = await getDetails(packageType, address, 1);
      let children = [null, null];
      for (let i = 0; i < 2; i++) {
        if (
          Array.isArray(addresses) &&
          Array.isArray(codes) &&
          addresses.length > i &&
          codes.length > i &&
          addresses[i] &&
          addresses[i] !== "0x0000000000000000000000000000000000000000"
        ) {
          children[i] = await buildBinaryTree(addresses[i], codes[i], packageType, depth + 1);
        }
      }
      return {
        address,
        code,
        children,
      };
    } catch (err) {
      console.error('Error in buildBinaryTree for', address, err);
      throw err;
    }
  }

  async function buildLevelTreeForOtherPackages(rootAddress, rootCode, packageType) {
    let root = { address: rootAddress, code: rootCode, children: [] };
    let level = 1;
    const maxLevels = (packageType === 20 || packageType === 50) ? 5 : 10;
    while (level <= maxLevels) {
      const [addresses, codes] = await getDetails(packageType, rootAddress, level);
      if (!addresses || addresses.length === 0) break;
      let slotIndex = 0;
      let currentLevelNodes = [root];
      for (let l = 1; l < level; l++) {
        let nextLevel = [];
        for (let node of currentLevelNodes) {
          if (node.children && node.children.length < 2) {
            nextLevel.push(node);
          } else if (node.children && node.children.length === 2) {
            nextLevel.push(node.children[0], node.children[1]);
          }
        }
        currentLevelNodes = nextLevel;
      }
      for (let i = 0; i < addresses.length; i++) {
        if (addresses[i] && addresses[i] !== "0x0000000000000000000000000000000000000000") {
          let parentFound = false;
          for (let j = 0; j < currentLevelNodes.length; j++) {
            if (!currentLevelNodes[j].children) {
              currentLevelNodes[j].children = [];
            }
            if (currentLevelNodes[j].children.length < 2) {
              const child = { address: addresses[i], code: codes[i], children: [] };
              currentLevelNodes[j].children.push(child);
              parentFound = true;
              break;
            }
          }
          if (!parentFound) break;
        }
      }
      level++;
    }
    return root;
  }

  const NODE_RADIUS = 38;
  const H_GAP = 40;
  const V_GAP = 100;

  function layoutBinaryTreeImproved(node, depth = 0, x = 0, y = 0, hGap = 40, vGap = 100, nextX = { value: 0 }) {
    if (!node) return { nodes: [], width: 0 };
    let left = null, right = null;
    if (node.children && node.children[0]) left = layoutBinaryTreeImproved(node.children[0], depth + 1, 0, y + vGap, hGap, vGap, nextX);
    if (node.children && node.children[1]) right = layoutBinaryTreeImproved(node.children[1], depth + 1, 0, y + vGap, hGap, vGap, nextX);
    let nodeX;
    if (!left && !right) {
      nodeX = nextX.value * (64 + hGap);
      nextX.value++;
    } else if (left && right) {
      nodeX = (left.centerX + right.centerX) / 2;
    } else if (left) {
      nodeX = left.centerX;
    } else if (right) {
      nodeX = right.centerX;
    }
    const nodeY = depth * vGap + 48;
    const nodes = [
      { node, x: nodeX, y: nodeY },
      ...(left ? left.nodes : []),
      ...(right ? right.nodes : []),
    ];
    return { nodes, width: (right ? right.width : 0) + (left ? left.width : 0), centerX: nodeX };
  }

  const packageColors = [
    "#FFB940",
    "#00CFFF",
    "#FB6B2C",
    "#A86AF1",
    "#5BFFAE",
    "#FF5BB2",
  ];

  function SvgTree({ root }) {
    if (!root) return null;
    const { nodes } = layoutBinaryTreeImproved(root, 0, 0, 0, 40, 100, { value: 0 });
    const minX = Math.min(...nodes.map(n => n.x));
    const maxX = Math.max(...nodes.map(n => n.x));
    const svgWidth = Math.max(800, maxX - minX + 100);
    const xOffset = svgWidth / 2 - ((minX + maxX) / 2);
    const svgHeight = Math.max(...nodes.map(n => n.y)) + 100;
    const nodeMap = new Map();
    nodes.forEach(pos => nodeMap.set(pos.node, pos));
    const textColor = packageColors[selectedPackageIdx] || '#FFB940';
    return (
      <svg width={svgWidth} height={svgHeight} style={{ display: 'block' }}>
        {nodes.map(pos => (
          pos.node.children && pos.node.children.map((child, i) =>
            child && nodeMap.get(child) ? (
              <line
                key={pos.node.code + '-' + i}
                x1={pos.x + xOffset}
                y1={pos.y}
                x2={nodeMap.get(child).x + xOffset}
                y2={nodeMap.get(child).y}
                stroke="#aaa"
                strokeWidth={2}
              />
            ) : null
          )
        ))}
        {nodes.map(pos => (
          <g key={pos.node.code} transform={`translate(${pos.x + xOffset},${pos.y})`}>
            <defs>
              <linearGradient id="nodeLinearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                 <stop offset="0%" stopColor="#151515" />
                 <stop offset="100%" stopColor="#151515" />
              </linearGradient>
            </defs>
            <circle r={NODE_RADIUS} cx={0} cy={0} fill="url(#nodeLinearGradient)" />
            <foreignObject x={-NODE_RADIUS} y={-NODE_RADIUS} width={NODE_RADIUS * 2} height={NODE_RADIUS * 2}>
              <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                <svg
                  width={38}
                  height={38}
                  viewBox="0 0 38 38"
                  style={{
                    borderRadius: '50%',
                    marginBottom: 2,
                    border: `2px solid ${textColor}`,
                    boxShadow: '0 2px 8px #0006',
                    background: '#151515',
                  }}
                >
                  <circle cx="19" cy="19" r="19" fill="#151515" />
                  <path
                    d="M19 19c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm0 2c-4.418 0-13 2.229-13 6.667V34h26v-6.333C32 23.229 23.418 21 19 21z"
                    fill={textColor}
                  />
                </svg>
                <span style={{ fontWeight: 'bold', fontSize: 13, color: textColor, wordBreak: 'break-word', lineHeight: 1.1 }}>{pos.node.code}</span>
                <span style={{ fontSize: 9, color: textColor, wordBreak: 'break-word', lineHeight: 1.1 }}>{pos.node.address && pos.node.address.slice(0, 4) + '...' + pos.node.address.slice(-4)}</span>
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
    );
  }

  const isMobile = window.innerWidth < 600;
  const isOnlyRoot = tree && (!tree.children || tree.children.every(child => !child));

  return (
    <div style={{ minHeight: '100vh', background: 'none' }}>
      <div className="row gx-0">
        <div className="col-12">
          <div
            className="p-0 rock-dashboard-card"
            style={{
              width: '1000px',
              overflowX: 'auto',
              minWidth: 0,
              borderRadius: 28,
            //   boxShadow: '0 0 32px #0008',
              background: 'transparent',
              boxSizing: 'border-box',
            }}
          >
            <h2 className='text-lg-center text-center' style={{ fontFamily: 'monospace', fontWeight: 700, color: '#7B4FE2', marginBottom: 1 }}>
              {packageName} Referral Tree Details
            </h2>
            <div style={{ display: 'flex', gap: 8, marginBottom: 16, flexWrap: 'wrap', justifyContent: 'center' }}>
              {packageTypes.map((pkg, idx) => (
                <button
                  key={pkg}
                  onClick={() => setSelectedPackageIdx(idx)}
                  style={{
                    background: selectedPackageIdx === idx ? packageColors[idx] : '#232b45',
                    color: selectedPackageIdx === idx ? '#fff' : '#ccc',
                    border: 'none',
                    borderRadius: 8,
                    padding: '6px 18px',
                    fontWeight: 600,
                    fontSize: 15,
                    cursor: 'pointer',
                    boxShadow: selectedPackageIdx === idx ? '0 2px 8px #0006' : 'none',
                  }}
                >
                  {packageNames[idx]}
                </button>
              ))}
            </div>
            <div
              className="referral-tree-wrapper"
              style={{
                width: '100%',
                padding: 24,
                minHeight: 400,
                boxSizing: 'border-box',
              }}
            >
              <div style={{ minWidth: 'max-content' }}>
                {loading ? (
                  <div className="text-center text-dark p-5">Loading...</div>
                ) : error ? (
                  <div className="text-center text-danger p-5">{error}</div>
                ) : tree ? (
                  <SvgTree root={tree} />
                ) : (
                  <div className="text-center text-white mt-4" style={{ fontFamily: 'monospace', fontSize: 20 }}>
                    No referral investments in this scheme yet
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReferralTree; 