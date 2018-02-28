 import database from '../firebase/firebase';

 export const setFavouriteGifs = (favouriteGifs) => ({
     type:"SET_FAVOURITE_GIFS",
     favouriteGifs
 })

 export const startFetchingFavouriteGifs = () =>({
     type:"START_FETCHING_FAVOURITE_GIFS"
 })

 export const fetchFavouriteGifsError = (error) => ({
     type:"FETCH_FAVOURITE_GIFS_ERROR",
     error

 })

 export const clearFavouriteGifs = () => ({
     type:"CLEAR_FAVOURITE_GIFS",
})

 export const setFavouriteGifsThunk = (uid) => {
    return (dispatch) => {
       dispatch(startFetchingFavouriteGifs());
       database.ref(`users/${uid}/likedGifs`).once('value').then((snapshot) => {
           console.log(snapshot.val());
           var obj = snapshot.val();
           const gifs = [];
           for (var id in obj)
           {
              gifs.push(obj[id]);
           }
           console.log(gifs);
           dispatch(setFavouriteGifs(gifs));
       }).catch((e) => {
           console.log(e);
           dispatch(fetchFavouriteGifsError(e));
       })
   }
}



