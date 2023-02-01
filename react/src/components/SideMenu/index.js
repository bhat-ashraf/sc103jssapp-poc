import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { useHistory } from 'react-router-dom';

const SideMenu = (props) => {
  const history = useHistory();
  let urlElements = history.location.pathname.split('/');
  let currentUrlLastPart = urlElements[1].split('?')[0];
  let itemUrlParts = '';
  let itemUrlLastPart = '';
  let activeFlag = '';
  return (
    <div>
      {props.fields.data.datasource && (
        <Nav defaultActiveKey="/" className="flex-column">
          <b>{props.fields.data.datasource.sectionTitle.value}</b>
          {props.fields.data.datasource.sideMenuItems.targetItems &&
            props.fields.data.datasource.sideMenuItems.targetItems.map((item, index) => {
              itemUrlParts = item.url.url.split('/');
              itemUrlLastPart = itemUrlParts[itemUrlParts.length - 1];
              activeFlag = itemUrlLastPart === currentUrlLastPart ? true : '';
              return (
                <Nav.Link eventKey={index} key={index} disabled={activeFlag} href={item.url.url}>
                  <b>{item.title && item.title.value}</b>
                </Nav.Link>
              );
            })}
        </Nav>
      )}
    </div>
  );
};

export default SideMenu;
