// export default {
//   namespace: 'global',

//   state: {
//     data: {},
//     detail: {},
//     imgUrls: [],
//     token: '',
//     schoolList: [],
//   },

//   effects: {
//     *saveDetail({ payload, extra }, { call, put }) {
//       yield put({
//         type: '_saveDetail',
//         payload: payload,
//       });

//       extra && extra.success && extra.success();
//     },
//   },
//   subscriptions: {
//     /**
//      * 监听 history 变化
//      */
//     monitorHistory({ history, dispatch }) {
//       return history.listen(({ pathname, query }) => {
//         // FIXME: 这里要小心目录的写法，不然容易匹配到这个路径
//         // if (pathname.startsWith('/detail') || pathname.startsWith('/service')) {
//         //     console.log('执行了');
//         //     // setDevice(query, dispatch);
//         // }
//       });
//     },
//   },
//   reducers: {
//     _fetchToken(state, action) {
//       const data = action.payload;
//       console.log(data, '----------------');
//       return {
//         ...state,
//         token: data,
//       };
//     },
//     _uploadImg(state, action) {
//       const imgUrls = action.payload;
//       return {
//         ...state,
//         imgUrls,
//       };
//     },
//     _saveDetail(state, action) {
//       const { detail } = action.payload;
//       return {
//         ...state,
//         detail,
//       };
//     },
//     save(state, action) {
//       const payload = action.payload;
//       return {
//         ...state,
//         ...payload,
//       };
//     },
//   },
// };
