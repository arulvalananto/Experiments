import React, { Component } from "react";

import "./ZoomBox.css";

import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

class ZoomBox extends Component {
  render() {
    return (
      <TransformWrapper
        initialScale={0.5}
        initialPositionX={0}
        initialPositionY={0}
        minScale={0.1}
        maxScale={10}
        limitToBounds={false}
      >
        {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
          <>
            <div className="tools">
              <button className="btn btn__zoomIn" onClick={() => zoomIn()}>
                +
              </button>
              <button className="btn btn__zoomOut" onClick={() => zoomOut()}>
                -
              </button>
              <button
                className="btn btn__resetTransform"
                onClick={() => {
                  console.log(rest);
                  resetTransform();
                }}
              >
                x
              </button>
            </div>
            <TransformComponent>
              <div className="tree__container">{this.props.children}</div>
            </TransformComponent>
          </>
        )}
      </TransformWrapper>
    );
  }
}

export default ZoomBox;
