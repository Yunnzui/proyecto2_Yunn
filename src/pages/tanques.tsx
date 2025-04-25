import React from 'react';
import TanqueTable from '../components/TanqueTable';
import './tanques.css';

const Tanques: React.FC = () => {
    return (
        <div className="tanques-wrapper">
            <div className="tanques-card">
                <TanqueTable />
            </div>
        </div>
    );
};

export default Tanques;