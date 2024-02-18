import React from 'react';
import { Modal, Table } from 'antd';

const ViewFeeHistory = ({ visible, onClose, feeHistory }) => {
    return (
        <Modal
            title="Fee History"
            visible={visible}
            onCancel={onClose}
            footer={null}
        >
            <Table
                dataSource={feeHistory}
                columns={[/* Define your fee history columns */]}
                pagination={false}
            />
        </Modal>
    );
};

export default ViewFeeHistory;
