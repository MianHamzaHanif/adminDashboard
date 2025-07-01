import React from 'react';
import './CustomerReferral.css';

const CustomerReferral = () => {
    return (
        <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="site-card">
                    <div className="site-card-header">
                        <h4 className="title">Referral Tree</h4>
                    </div>
                    <div className="site-card-body table-responsive">
                        <p>No Referral user found</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReferral; 