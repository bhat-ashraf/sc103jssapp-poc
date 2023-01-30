import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import Nav from 'react-bootstrap/Nav';

class SideMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        {this.props.fields.data.datasource && (
          <Nav defaultActiveKey="/" className="flex-column">
            {this.props.fields.data.datasource.sideMenuItems.targetItems &&
              this.props.fields.data.datasource.sideMenuItems.targetItems.map((item, index) => (
                <Nav.Link eventKey={index} activeClassName="active" key={index} href={item.url.url}>
                  <b>{item.title && item.title.value}</b>
                </Nav.Link>
              ))}
          </Nav>
        )}
      </div>
    );
  }
}

export default SideMenu;
