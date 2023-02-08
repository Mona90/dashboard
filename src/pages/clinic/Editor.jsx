import React from "react";
import TuiImageEditor from "tui-image-editor";

import "tui-image-editor/dist/tui-image-editor.css";
import "tui-color-picker/dist/tui-color-picker.css";
import './editorStyle.css'
import { useRef } from "react";

class ImageEditor extends React.Component {

  rootEl = React.createRef();
  imageEditorInst = null;

  componentDidMount() {
    this.imageEditorInst = new TuiImageEditor(this.rootEl.current, {
      ...this.props
    });
  }
  // componentDidUpdate(){
  //       console.log('rootEl', this.rootEl.includeUI.loadImage.path)

  // }
  componentWillUnmount() {
    // this.unbindEventHandlers();
    this.imageEditorInst.destroy();
    this.imageEditorInst = null;
  }

  render() {
            console.log('rootEl', this.rootEl)

    return (
      <>
    <div ref={this.rootEl} />
    <div>
      {/* <img src={this.rootEl.includeUI.loadImage.path} alt="..."/> */}
    </div>
    </>
    );
  }
}
const myTheme = {

  "downloadButton.display": "none",
  "loadButton.display": 'none',
  "headerLogo.display": 'none'

};
export default function Editor({selectedImg}) {
  const imgRef = useRef();
  const logImageContent = () =>{
    // let instance = imgRef.current.getInstance();
    // let dataURL = instance.toDataURL();
    // console.log(dataURL.slice(0,50))
    console.log('imgRef', imgRef.current)
  }
  const props = {
    includeUI: {
      loadImage: {
        path: selectedImg.image,
        name: 'SampleImage',
      },
      theme: myTheme,
     menu: ["crop", "flip", "rotate", "draw", "shape", "text", "filter"],
      initMenu: "",
      uiSize: {
        width: "600px",
        height: "500px"
      },
      menuBarPosition: "bottom",
    },
    cssMaxWidth: 700,
    cssMaxHeight: 500,
    selectionStyle: {
      cornerSize: 20,
      rotatingPointOffset: 70
    },
  };
  console.log('props', props)
  return (
    <div>
      <ImageEditor {...props} key={selectedImg.id} ref={imgRef}/>
      <button onClick={logImageContent}>get Image</button>
    </div>
  );
}
