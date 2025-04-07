'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';

import { Button } from '~/components/ui/button';

import { TrashIcon } from '~/components/ui/icons/trash';
import { AddPhotoIcon } from '~/components/ui/icons/add-photo';
import { Card, CardHeader, CardTitle } from '~/components/ui/card';
import { Carousel, CarouselContent, CarouselItem } from '~/components/ui/carousel';

type ImagesValue = { thumbpath: string; name: string }[];

type LocalImageValue = {
  src: string;
  alt?: string;
};

type ImagesFormProps = {
  value: ImagesValue;
  onCreate: (image: File) => void;
  onRemove: (name: string) => void;
};

const ImagesForm = ({ value, onCreate, onRemove }: ImagesFormProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [localImages, setLocalImages] = useState<LocalImageValue[]>([]);

  const handleUploadLocalImage = (image?: File) => {
    if (!image) {
      return;
    }

    const src = URL.createObjectURL(image);
    setLocalImages((prev) => [...prev, { src, alt: image.name }]);
    onCreate(image);
  };

  const handleRemoveLocalImage = (src: string) => {
    setLocalImages(localImages?.filter((image) => image.src !== src));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Photos</CardTitle>
        <Button
          size='flat'
          variant='outline'
          onClick={() => fileInputRef.current?.click()}
        >
          <AddPhotoIcon />
          <span>Add</span>
        </Button>
        <input
          ref={fileInputRef}
          type='file'
          className='hidden'
          accept='image/png, image/jpeg, image/jpg'
          onChange={(e) => handleUploadLocalImage(e.target.files?.[0])}
        />
      </CardHeader>
      <Carousel>
        <CarouselContent className={css.container}>
          {localImages.map((image, index) => (
            <RemovableImage
              key={index}
              onRemove={() => handleRemoveLocalImage(image.src)}
              image={{ src: image.src, alt: image.alt ?? '' }}
            />
          ))}
          {value.map((image, index) => (
            <RemovableImage
              key={index}
              onRemove={() => onRemove(image.name)}
              image={{ src: image.thumbpath, alt: image.name }}
            />
          ))}
        </CarouselContent>
      </Carousel>
    </Card>
  );
};

const RemovableImage = ({ image, onRemove }: { image: LocalImageValue; onRemove: () => void }) => (
  <CarouselItem className={css.imageWrapper}>
    <Image
      width={288}
      height={216}
      src={image.src}
      className={css.image}
      alt={image.alt ?? ''}
    />

    <Button
      size='icon'
      variant='default'
      onClick={onRemove}
      className={css.removeButton}
    >
      <TrashIcon className={css.trashIcon} />
    </Button>
  </CarouselItem>
);

const css = {
  container: 'flex flex-row gap-3 mt-4',
  imageWrapper: 'relative group p-0.5 w-36 aspect-image max-w-[144px] rounded-sm overflow-hidden',
  image: [
    'absolute inset-0 object-cover select-none pointer-events-none',
    'group-hover:ring-2 group-hover:ring-brand-primary transition-all duration-200',
  ].join(' '),
  removeButton: 'absolute top-2 right-2 w-7 h-7 p-1.5 rounded-sm [&_svg]:size-4 backdrop-blur-lg',
  trashIcon: 'text-[currentColor]',
};

export { ImagesForm };
