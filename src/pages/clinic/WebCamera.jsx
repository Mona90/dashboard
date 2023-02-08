import { Button, Modal, Space } from 'antd';
import React,{ useState, useRef } from 'react'
import Webcam from 'react-webcam';

function WebCamera(props) {
    const {images,setImages, setClosePage} = props
    const [isModalOpen, setIsModalOpen] = useState(true)
    const camRef = useRef(null)

    const videoConstraints = {
        width: 1280,
        height: 720,
        facingMode: "user"
    };
    const capture = ()=>{
      const imageSrc = camRef.current.getScreenshot();
      setImages([...images, {id: images.length + 1, image: imageSrc}])

    }

    const stop = () => {
        setIsModalOpen(false)
        setClosePage(false)
        // camRef.current.video.srcObject = null;
        //  let stream = camRef.current.stream;
        // const tracks = stream.getTracks();
        // tracks.forEach(track => track.stop());
    };
  return (
    <Modal title="Basic Modal" 
     open={isModalOpen}
     onCancel={stop}
     footer={null}>
        <Webcam
            audio={false}
            height='100%'
            screenshotFormat="image/jpeg"
            width='100%'
            ref={camRef}
            videoConstraints={videoConstraints}
        />
        <Space size='small' className="mt-4">
            <Button
                onClick={capture}
                disabled={camRef === null ? true : false}
            >
                Capture photo
            </Button>
            <Button onClick={stop}>
                Close
            </Button>
        </Space>
        
    </Modal>
    );
}

export default WebCamera