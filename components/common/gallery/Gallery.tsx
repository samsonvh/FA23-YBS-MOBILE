import React, { useRef, useState } from "react";
import { FlatList, Text, View } from "react-native";
import GalleryCard from "./galleryCard/GalleryCard";
import GalleryBar, { SelectThumbnail } from "./galleryBar/GalleryBar";

const data = [
  "https://loremflickr.com/640/480/transport",
  "https://loremflickr.com/640/480/transport",
  "https://loremflickr.com/640/480/transport",
  "https://loremflickr.com/640/480/transport",
  "https://loremflickr.com/640/480/transport",
  "https://loremflickr.com/640/480/transport",
];

const Gallery = () => {
  const [listWidth, setListWidth] = useState<number>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const galleryRef = useRef<FlatList>();
  const selectThumbnailRef = useRef<SelectThumbnail>();

  return (
    <View>
      <FlatList
        ref={galleryRef}
        data={data}
        horizontal={true}
        onLayout={(event) => {
          const { width } = event.nativeEvent.layout;
          setListWidth(width);
        }}
        onScroll={(event) => {
          const scrollPosition = event.nativeEvent.contentOffset.x;
          let index = scrollPosition / listWidth;
          const mod = index % 1;
          index = index - mod;
          if (index != currentIndex) {
            setCurrentIndex(index);
            selectThumbnailRef.current.selectThumbnail(index);
            // selectThumbnailRef.current.selectThumbnail(index, true);
            // selectThumbnailRef.current.thumbnailBarRef.current.scrollToIndex({ index: index });
            // galleryRef.current.scrollToIndex({ index: index });
          }
        }}
        snapToAlignment="start"
        decelerationRate="fast"
        snapToInterval={listWidth}
        renderItem={(item) => <GalleryCard uri={item.item} />}
      />
      <GalleryBar
        ref={selectThumbnailRef}
        data={data}
        galleryRef={galleryRef}
      />
    </View>
  );
};

export default Gallery;
