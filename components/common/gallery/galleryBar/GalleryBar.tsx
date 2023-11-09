import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { FlatList, View } from "react-native";
import styles from "./galleryBar.style";
import GalleryThumbnail, {
  SelectState,
} from "./galleryThumbnail/GalleryThumbnail";

export type SelectThumbnail = {
  thumbnailBarRef: React.MutableRefObject<FlatList>;
  selectThumbnail: (index: number) => void;
};

interface GalleryBarProps {
  data: string[];
  galleryRef: React.MutableRefObject<FlatList>;
}

const GalleryBar = forwardRef<SelectThumbnail, GalleryBarProps>(
  (props: GalleryBarProps, ref) => {
    const thumbnailBarRef = useRef<FlatList>();
    const thumbnailRefs = useRef<SelectState[]>([]);
    const [thumbnailRefsState, setThumbnailRefsState] = useState(thumbnailRefs);
    const [previousIndex, setPreviousIndex] = useState<number>(0);

    const selectImage = (index: number) => {
      thumbnailBarRef.current.scrollToIndex({ index: index });
      props.galleryRef.current.scrollToIndex({ index: index });
    };

    const selectThumbnail = (index: number) => {
      thumbnailRefsState.current[previousIndex].setSelected(false);
      thumbnailRefsState.current[index].setSelected(true);
      setPreviousIndex(index);
    };

    useImperativeHandle(ref, () => ({
      thumbnailBarRef: thumbnailBarRef,
      selectThumbnail(index: number) {
        selectThumbnail(index);
      },
    }));

    return (
      <View style={styles.galleryBar}>
        <FlatList
          ref={thumbnailBarRef}
          style={styles.thumbnailList}
          data={props.data}
          horizontal={true}
          renderItem={(item) => {
            let selected = false;
            if (item.index == 0) {
              selected = true;
            }
            return (
              <GalleryThumbnail
                ref={(element) => (thumbnailRefs.current[item.index] = element)}
                index={item.index}
                uri={item.item}
                selected={selected}
                // galleryRef={props.galleryRef}
                // thumbnailBarRef={thumbnailBarRef}
                // thumbnailRefs={thumbnailRefs}
                // unselectThumbnail={unselectThumbnail}
                // setPreviousIndex={setPreviousIndex}
                selectImage={selectImage}
              />
            );
          }}
          ItemSeparatorComponent={() => (
            <View style={styles.thumbnailListSeparator} />
          )}
        />
      </View>
    );
  }
);

export default GalleryBar;
