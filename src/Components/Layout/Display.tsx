import {PieChartOutlined, SolutionOutlined, QuestionOutlined, BookOutlined, FormOutlined, WarningOutlined } from '@ant-design/icons';
import { Layout as AntdLayout, Menu, theme } from 'antd';
import Navbar from './Navbar/navbar';
import "./display.css"


const { Header, Content, Sider } = AntdLayout;


const items1 = [
  {
    key: 'overview',
    icon: <PieChartOutlined />,
    label: 'Overview'
  }, {
    key: 'joke',
    icon: <FormOutlined />,
    label: 'Joke',
  },
  {
    key: 'fact',
    icon: <SolutionOutlined />,
    label: 'Fact',
  },
  {
    key: 'question',
    icon: <QuestionOutlined />,
    label: 'Question',
  },
  {
    key: 'divider1',
    label: 'Divider',
    isDivider: true,
  },
  {
    key: 'docs',
    icon: <BookOutlined />,
    label: 'Docs',
  },
  {
    key: 'help',
    icon: <WarningOutlined />,
    label: 'Help',
  },
];

const CustomLayout = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <AntdLayout>
      <Header className='header-navbar'>
        <Navbar />
      </Header>
      <AntdLayout>
      <Sider width={256}>
  <Menu
    mode="inline"
    defaultSelectedKeys={['overview']}
    defaultOpenKeys={['sub1']}
    style={{
      height: '100%',
      borderRight: 0,
    }}
  >
    {items1.map((item) => {
      if (item.isDivider) {
        return <Menu.Divider key={item.key} />;
      }
      return (
        <Menu.Item key={item.key} icon={item.icon}>
          {item.label}
        </Menu.Item>
      );
    })}
  </Menu>
</Sider>

        <AntdLayout
          style={{
            padding: '24px 24px 24px',
          }}
        >
         
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 600,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
                }}
          >
            Content
          </Content>
        </AntdLayout>
      </AntdLayout>
    </AntdLayout>
  );
};

export default CustomLayout;
