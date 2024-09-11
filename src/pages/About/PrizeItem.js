import { Col, Space, Avatar } from 'antd';

const PrizeItem = (props) => {
    return (
        <Col lg={6} sm={12} xs={24}>
            <Space className='prize-item' direction="vertical">
                <Avatar className="prize-logo" src={props.img}
                    
                    
                />
                <span className="prize-title">{props.title}</span>
                <span>{props.txt1}</span>
                <span>{props.txt2}</span>
                <span>{props.txt3}</span>
                <span>{props.txt4}</span>
            </Space>
      </Col>
    );
};

export default PrizeItem;