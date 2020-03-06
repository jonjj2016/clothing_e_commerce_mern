import {
    createSelector
} from 'reselect';
// const COLLECTION_ID_MAP = {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }
const shopCartSelector = state => state.shopData;
export const selectShopCartData = createSelector([shopCartSelector], shopData => {

    console.log(shopData.shop_data)
    return shopData
});
//selector with argument //// collectionUrlParam
export const selectCollection = collectionUrlParam => createSelector([selectShopCartData], collections => {
    console.log(collectionUrlParam)
        //return collections.find(item => item.id === COLLECTION_ID_MAP[collectionUrlParam])
    return collections[collectionUrlParam]
})
export const selectCollectionPreview = createSelector([selectShopCartData], collections => {
    return Object.keys(collections).map(key => collections[key])
})