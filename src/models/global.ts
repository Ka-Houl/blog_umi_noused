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
//     *save({ payload, extra }, { call, put }) {
//       yield put({
//         type: 'save',
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
//     save(state, action) {
//       const payload = action.payload;
//       return {
//         ...state,
//         ...payload,
//       };
//     },
//   },
// };
