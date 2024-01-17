import { configureStore } from '@reduxjs/toolkit';
import Covid19Slice from "./slices/Covid19Slice";

const Store = configureStore({
	// 개발자가 직접 작성한 Slice 오브젝트들이 명시되어야 한다.
	reducer : {
		Covid19Slice : Covid19Slice
	},
	// 비동기 미들웨어 추가 (Ajax 처리가 필요한 경우만 설정)
	middleware: (getDefaultMiddleware => getDefaultMiddleware({ serializableCheck : false }))
})

export default Store;