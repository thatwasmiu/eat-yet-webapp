import { message, UploadProps, UploadFile, Upload, Card } from "antd";
import { RcFile, UploadChangeParam } from "antd/es/upload";
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { useState } from "react";
import { GetDataCallBackProps } from "../../../../interface/CallBackProps.interface";

const ImageSelect = () => {
    const [loading, setLoading] = useState(false);
    const [imageUrl, setImageUrl] = useState<string>();
    const uploadButton = createUploadButton(loading);
    const beforeUpload = (file: RcFile) => {
        return beforeUploadImpl(file, (url) => {
            setLoading(false);
            setImageUrl(url);
        })
    } 
    const handleChange: UploadProps['onChange'] = (info: UploadChangeParam<UploadFile>) => {
        handleChangeImpl(info, () => {setLoading(true)}, (url) => {
            setLoading(false);
            setImageUrl(url);
        })
    };

    return (
        <Card hoverable
        >
            <Upload
            name="file"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            action={"http://localhost:8083/api/upload"}
            onChange={handleChange}
            >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
            </Upload>
        </Card>
        
    )
}

export default ImageSelect;

// function Impl
const createUploadButton = (loading : boolean) => {
    return (
    <div className="w-full">
        {loading ? <LoadingOutlined /> : <PlusOutlined />}
        <div style={{ marginTop: 8 }}>Upload</div>
      </div>
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

const beforeUploadImpl = (file: RcFile, callback: (url: string) => void) => {
    const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    getBase64(file, callback);
    if (!isJpgOrPng) {
      message.error('You can only upload JPG/PNG file!');
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error('Image must smaller than 2MB!');
    }
    
    return false;
};

const getBase64 = (img: RcFile, callback: (url: string) => void) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result as string));
    reader.readAsDataURL(img);
};