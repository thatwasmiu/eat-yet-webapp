import { message, UploadProps, UploadFile, Upload, Card, Button } from "antd";
import { RcFile, UploadChangeParam } from "antd/es/upload";
import { LoadingOutlined, UploadOutlined } from '@ant-design/icons';
import { useState } from "react";
import AttachmentService from "../module/service/Attachment.service";

interface ImageSelectProps {
    getUrlCallBack: (url : string) => void,
    originUrl?: string,
}

const ImageSelect = ({getUrlCallBack, originUrl} : ImageSelectProps) => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string | undefined>(originUrl);
    const uploadButton = createUploadButton(loading);
    const beforeUpload = (file: RcFile) => {
        return beforeUploadImpl(file);
    } 
    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        handleChangeImpl(info, () => {setLoading(true)}, (url) => {
            setLoading(false);
            setImageUrl(url);
            getUrlCallBack(url);
        })
    };

    return (
        <Card hoverable
        >
            {imageUrl && <img src={imageUrl} alt="avatar" style={{ width: '100%' }} />} 
            <Upload
            name="file"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            action={AttachmentService.getUrl}
            onChange={handleChange}
            >
            {uploadButton}
            </Upload>
        </Card>
        
    )
}

export default ImageSelect;

// function Impl
const createUploadButton = (loading : boolean) => {
    return (
    <Button className="w-full">
        {loading ? <LoadingOutlined /> : <UploadOutlined />}
        Upload
      </Button>
    )  
};

const handleChangeImpl = (info: UploadChangeParam<UploadFile>, callback: () => void, callback2: (url: string) => void) => {
    if (info.file.status === 'uploading') {
        callback();
        return;
    }
    if (info.file.status === 'done') {
       callback2("http://localhost:8083"+info.file.response.fileName);
    }
}

const beforeUploadImpl = (file: RcFile ) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    // getBase64(file, callback);
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    
    return isJpgOrPng && isLt2M;
};

// const getBase64 = (img: RcFile, callback: (url: string) => void) => {
//     const reader = new FileReader();
//     reader.addEventListener('load', () => callback(reader.result as string));
//     reader.readAsDataURL(img);
// };