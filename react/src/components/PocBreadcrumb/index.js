import React, { useEffect } from 'react';
import { Text, withSitecoreContext } from '@sitecore-jss/sitecore-jss-react';
import 'bootstrap/dist/css/bootstrap.css';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

const PocBreadcrumb = (props) => {
  return (
    <div style={{ display: 'block', width: 700, padding: 30 }}>
      {props.fields.data.item && (
        <Breadcrumb>
          {props.fields.data.item.ancestors &&
            props.fields.data.item.ancestors.reverse().map((element, index) => {
              return (
                <Breadcrumb.Item key={index} href={element.url.path}>
                  {element.title.value}
                </Breadcrumb.Item>
              );
            })}
          <Breadcrumb.Item active>{props.sitecoreContext.route.fields.Title.value}</Breadcrumb.Item>
        </Breadcrumb>
      )}
    </div>
  );
};

export default withSitecoreContext()(PocBreadcrumb);
