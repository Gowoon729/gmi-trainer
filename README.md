# GMI 좌우 판별 훈련기 (웹앱 버전)

## 파일 구성
- `index.html` : 앱 화면과 동작
- `photos/` : 기본 사진 130장 (상지 90장: L_xx, R_xx / 하지 40장: lower_L_xx, lower_R_xx)
- `photos.json` : 출제할 기본 사진 목록과 좌우 정보
- `manifest.json`, `icon-*.png` : 홈 화면 설치용
- `sw.js` : 한 번 연 뒤에는 인터넷이 약해도 열리도록 파일을 보관

## GitHub Pages에 올리기 (PC 권장)
1. github.com에서 New repository → 이름 예: `gmi-trainer` → Public → Create
2. "uploading an existing file" 클릭 → 압축 푼 폴더 안의 **모든 파일과 photos 폴더**를 끌어다 놓기 → Commit changes
3. Settings → Pages → Branch: `main`, 폴더 `/ (root)` → Save
4. 1~2분 뒤 `https://아이디.github.io/gmi-trainer/` 주소로 접속

## 기본 사진 추가·변경 (모든 사용자에게 반영)
1. `photos/` 폴더에 사진 파일 업로드 (예: `L_46.jpg`)
2. `photos.json`에 한 줄 추가: `{"file": "L_46.jpg", "side": "L", "part": "upper"}`
   - 하지 사진은 `"part": "lower"`
   - 마지막 줄 뒤에는 쉼표가 없어야 합니다.
3. 좌우를 바꾸려면 해당 줄의 `"side"`만 `"L"` ↔ `"R"`로 수정

## 기록
- 훈련 기록은 각자의 폰 브라우저에만 저장됩니다.
- 설정 → 훈련 기록 백업에서 파일로 내보내고 다시 불러올 수 있습니다.
