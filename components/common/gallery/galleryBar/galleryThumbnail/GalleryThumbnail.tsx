import React, { forwardRef, useImperativeHandle, useState } from "react";
import { FlatList, Image, Pressable, PressableProps, View } from "react-native";
import styles from "./galleryThumbnail.style";

export type SelectState = {
  setSelected: (selected: boolean) => void;
};

interface ThumbnailProps {
  index: number;
  uri: string;
  selected: boolean;
  // thumbnailBarRef: React.MutableRefObject<FlatList>;
  // galleryRef: React.MutableRefObject<FlatList>;
  // thumbnailRefs: React.MutableRefObject<SelectState[]>;
  // unselectThumbnail: () => void;
  // setPreviousIndex: React.Dispatch<React.SetStateAction<number>>;
  selectImage: (index: number) => void;
}

const GalleryThumbnail = forwardRef<SelectState, ThumbnailProps>(
  (props: ThumbnailProps, ref) => {
    const [selected, setSelected] = useState(props.selected);

    useImperativeHandle(ref, () => ({
      setSelected(selected: boolean) {
        setSelected(selected);
      },
    }));

    return (
      <Pressable
        style={(pressed) => {
          return [
            selected ? styles.selectedThumbnail : styles.galleryThumbnail,
          ];
        }}
        onPressOut={() => {
          props.selectImage(props.index);
          // setSelected(!selected);
          // props.unselectThumbnail();
          // props.thumbnailBarRef.current.scrollToIndex({ index: props.index });
          // props.galleryRef.current.scrollToIndex({ index: props.index });
          // props.setPreviousIndex(props.index);
        }}
      >
        <Image style={styles.thumbnailImage} source={{ uri: props.uri }} />
      </Pressable>
    );
  }
);
export default GalleryThumbnail;
