
import { Card, Avatar, Calendar, Typography } from 'antd';
import {
  SolutionOutlined,
  MoneyCollectOutlined,
  UsergroupAddOutlined,
  TeamOutlined
} from '@ant-design/icons';
import AdminCharts from './admin_charts'
const { Title } = Typography;

const cardData = [
  { key: 'students', title: 'Students', value: 200, icon: <SolutionOutlined /> },
  { key: 'teachers', title: 'Teachers', value: 20, icon: <TeamOutlined /> },
  { key: 'parents', title: 'Parents', value: 100, icon: <UsergroupAddOutlined /> },
  { key: 'earnings', title: 'Earnings', value: 100, icon: <MoneyCollectOutlined /> },
];

const cardRender = cardData.map((item, index) => (
  <Card style={{ width: '25%', margin: '0% 1%' }} key={index}>
    <Card.Meta
      avatar={<Avatar icon={item.icon} style={{ fontSize: '24px', marginRight: '10px' }} />}
      title={item.title}
      description={item.value}
    />
  </Card>
));

const Admin
  = () => {

    return (
      <>
        <Title level={2}>Admin</Title>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', maxHeight: "6rem" }}>
          {cardRender}
        </div>
        <AdminCharts />
        <Card title="Event Calender" style={{ width: '40%' }}>
          <Calendar />
        </Card>
        {/*<Table
          columns={columns}
          rowKey={'email'}
          dataSource={data}
          pagination={tableParams.pagination}
          onChange={handleTableChange}
        />*/}
      </>
    );
  };

export default Admin
  ;