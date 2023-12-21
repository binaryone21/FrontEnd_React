let memoDataList = [];

// localStorage 에서 memoDataList 를 불러오는 함수
function getMemoList() {
	memoDataList = JSON.parse(localStorage.getItem("memoList"));
	if(!memoDataList) {
		memoDataList = [];
		return;
	}
	for(let i=0; i<memoDataList.length; i++) {
		let memoData = memoDataList[i];
		setMemo(memoData);
	}
}

// memo 를 생성하는 함수
function setMemo(memoData) {
	let memo = document.createElement("div");
	let memoContainer = document.querySelector(".memoBoxContainer");
	memo.innerHTML = memoData;
	memo.classList.add("memoBox");
	memoContainer.appendChild(memo);
}

// 메모 저장
function saveMemo() {
	let memoData = document.getElementById("memoText").value;

	// 메모 유효성 검사
	if(!memoData) {
		alert("메모를 입력해주세요");
		return;
	}

	// 메모 저장
	setMemo(memoData);

	// localStorage 에 저장
	memoDataList.push(memoData);
	localStorage.setItem("memoDataList", JSON.stringify(memoDataList));
}

// 메모 초기화
function clearMemo() {
	document.querySelector(".memoBox").classList.remove("memoBox");
	localStorage.removeItem("memos");
	memoDataList = [];
}

document.DOMContentLoaded = function( ) {
	getMemoList();
}