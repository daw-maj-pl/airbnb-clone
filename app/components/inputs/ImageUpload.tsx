'use client';

import { useCallback } from 'react';
import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { TbPhotoPlus } from 'react-icons/tb';

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (results: any) => {
      onChange(results.info.secure_url);
    },

    [onChange]
  );

  return (
    <CldUploadWidget
      onUpload={handleUpload}
      uploadPreset="airbnb-clone-upload"
      options={{
        maxFiles: 1
      }}
    >
      {({ open }) => {
        return (
          <div
            className="
              relative
              flex
              flex-col
              justify-center
              items-center
              gap-4
              p-20
              border-neutral-300
              cursor-pointer
              hover:opacity-7
              transition
              border-dashed
              border-2
              text-neutral-600"
            onClick={() => open?.()}
          >
            <TbPhotoPlus size={50} />
            <div className="text-lg font-semibold">Click to upload</div>
            {value && (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  alt="Upload"
                  fill
                  style={{ objectFit: 'cover' }}
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
