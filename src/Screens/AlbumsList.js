import { View, Text ,FlatList,ActivityIndicator} from 'react-native'
import React,{useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { getAlbums } from '../redux/action/albumDetails';

export default function AlbumsList() {
  const dispatch = useDispatch();
  const albumState = useSelector((state) => state.albums.albumsList);
  console.log("albumsState data",albumState);
  useEffect(() => {
    dispatch(getAlbums());
  }, []);
  return (
    <View style={{ marginTop: 10 }}>
      {albumState.fetchingAlbums && <ActivityIndicator color={"green"} />}
      <FlatList
        data={albumState}
        renderItem={({ item }) => {
          return (
            <>
              <Text>userId: {item.userId}</Text>
              <Text>Title: {item.title}</Text>
              <Text>Id: {item.id}</Text>
            </>
          );
        }}
        ItemSeparatorComponent={() => (
          <View style={{ height: 1.5, backgroundColor: "green" }} />
        )}
      />
    </View>
  );
}