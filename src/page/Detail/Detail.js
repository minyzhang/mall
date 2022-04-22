import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getInfo } from "../../service/request";
import { DetailUl, DetailBtn } from "../../component/index";
import { detail } from "../../action/index";

const Detail = (props) => {
  useEffect(() => {
    getInfo(props.location.state.info).then((res) => {
      props.detail(res.data);
    });
  }, []);
  return (
    <Fragment>
      <DetailBtn {...props} />
      <DetailUl data={props.arr} />
    </Fragment>
  );
};

export default connect((res) => ({ ...res.detailList }), { detail })(Detail);
