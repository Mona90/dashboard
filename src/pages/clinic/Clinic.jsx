import { Button, Card, Space } from 'antd'
import React, { useState } from 'react'
import WebCamera from './WebCamera';
import { MdDeleteOutline } from 'react-icons/md'
import { RiImageEditLine } from 'react-icons/ri'
import Editor from './Editor';

export default function Clinic() {
  const [closePage, setClosePage] = useState(false)
  const [images, setImages] = useState([])
  const [openEditor, setOpenEditor] = useState(false)
  const [selectedImg, setSelectedImg] = useState({})
  const showModal = () => {
    setClosePage(true);
  };
  const handleDelete = (id) =>{
    setImages(images.filter(img=> img.id !== id ))
  }
  const handleSelect = (img) =>{
    setSelectedImg(img);
    setOpenEditor(true)
  }
  return (
    <Card>
      {images.length !== 0 && 
      <Space className='grid grid-cols-4 gap-2'>
        {images.map(img=>(
          <div className='relative h-fit'
           key={img.id}
            >
            <img 
              className='bg-cover bg-center bg-no-repeat'
              src={img.image}
              alt="..."/>
            <RiImageEditLine 
              className='absolute top-4 left-2 text-lg text-gray-200'
              onClick={()=>handleSelect(img)}
            />
            <span 
              className='absolute bottom-2 right-4 flex justify-center items-center cursor-pointer w-5 h-5 rounded-full border border-gray-200'
            >
              <MdDeleteOutline 
                className=' text-gray-200 text-lg '
                onClick={()=> handleDelete(img.id)}
              />
            </span>
          </div>
        ))}
      </Space>
      }
      
      <Button onClick={showModal} className="block mt-4">
          Add Photos
      </Button>
      {closePage &&
        <WebCamera 
          images={images}
          setImages={setImages} 
          closePage={closePage} 
          setClosePage={setClosePage}
        />
       }
      {openEditor && <Editor selectedImg={selectedImg}/>}
    </Card>
    // <Editor/>
  )
}
