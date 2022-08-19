# 프로그라운드 입사 사전과제.

## 실행 방법
1. yarn install
2. yarn run ios

## 사용 프레임워크, 라이브러리 및 사용 목적
- TypeScript
- React-Native
  - React-Native 기반으로 App 개발 및 유지보수를 한다고 알고 있기 때문에
    사용하였습니다.
- Redux
  - API 요청으로 받은 유저리스트를 Redux 로 관리했습니다.
- Redux Thunk
  - 미들웨어 상에서 dispatch 액션을 하기 위해 사용했습니다.
- Redux Actions
  - 간편하고 가독성있는 액션생선을 위해 사용했습니다.
- Axios
  - API 요청을 위해 사용했습니다.
- immer
  - API 요청으로 받은 유저리스트를 불변성을 유지하며 가공하기 위해 사용했습니다.
- React Native Linear Gradient
  - 메인화면의 Estimated WALK 부분의 그라데이션을 주기 위해 사용했습니다.

## 과제 구현 수준
- UI 구현
- View All 터치 -> 유저 상세목록 이동 -> 전체 유저 조회 -> 
  유저 터치 -> 모달 오픈 -> Block 터치 -> 해당 유저 차단 -> 
  차단된 유저 터치 -> 모달 오픈 -> Unblock 터치 -> 차단 해제
- 차단후 image 와 serialNumber 의 상태를 blocked user_num 으로 
  바꿔주기 위한 방법으로, API 요청으로 받은 유저들의 배열내의 각 유저 객체마다 isBlock: false 값을 추가적으로 저장해 관리했습니다.
- stack screen 으로 전체 사용자를 불러오는 Leader Board 화면은 쉽게 구성할 수 있었습니다.
  하지만 Leader Board 화면에서 각 사용자를 터치했을 때 보여줄 차단 모달을 구현하는 것에서 어려운 점이 있었습니다.
  tab screen 으로 구현을 하니 회색의 배경과 모달이 통째로 아래에서 위로 에니메이티드 되며 생성이 되었고 제가 원하는 구현 방법이 아니었습니다.
  이 부분은 모달을 직접 구현하는 것으로 해결했습니다.

## 구현 영상


## 소감
React-Native 를 사용해 볼 수 있는 소중한 시간이었습니다. 정말 감사드립니다. 
저는 React, Ionic-React 를 사용하며 사이드 프로젝트를 진행중이었습니다.
Ionic-React를 사용하며 모바일앱 개발에 흥미를 느꼈고, 익숙한 React 기반인 React-Native 라는 것을 알게 되었습니다.
현재 사이드프로젝트 단계에서 프레임워크를 변경할 수는 없었습니다.
사용을 해보지 못 한다는 아쉬움이 있던 찰나에 React-Native 를 활용한 사전과제를 받을 수 있었습니다.
처음 사용해보는 React-Native이기에 압박감이 있었지만, 강의를 구매하고 여러 방법으로 기능을 구현해 나갔습니다.
정말 즐겁고 뿌듯한 경험이었습니다.