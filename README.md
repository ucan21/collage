# 📸 사진 콜라주 메이커 PWA

## 기능
- 사진 2장 / 3장 / 4장 / 5장 분할 콜라주 생성
- 각 사진에 설명 텍스트 입력
- 배경색 5가지 변경
- 핸드폰 갤러리에서 직접 사진 선택
- 완성된 콜라주를 이미지로 저장 (공유 포함)
- 오프라인 사용 가능 (PWA)

---

## 🚀 GitHub Pages 배포 방법

### 1단계 — GitHub 저장소 생성
1. https://github.com 로그인
2. 우상단 `+` → `New repository`
3. Repository name: `collage` (또는 원하는 이름)
4. Public 선택 → `Create repository`

### 2단계 — 파일 업로드
이 폴더의 파일 4개를 모두 업로드:
- `index.html`
- `manifest.json`
- `sw.js`
- `icons/` 폴더 (icon-192.png, icon-512.png)

업로드 방법:
- `Add file` → `Upload files` → 파일 드래그 앤 드롭
- `Commit changes` 클릭

### 3단계 — GitHub Pages 활성화
1. 저장소 → `Settings` → 왼쪽 `Pages`
2. Source: `Deploy from a branch`
3. Branch: `main` / `(root)` 선택 → `Save`
4. 약 1~2분 후 배포 완료

### 4단계 — 핸드폰에 설치

**iPhone (Safari)**
1. Safari에서 배포된 URL 접속
   예: `https://ucan21.github.io/collage`
2. 하단 공유 버튼(□↑) 탭
3. `홈 화면에 추가` 선택
4. `추가` 탭 → 홈화면에 앱 아이콘 생성!

**Android (Chrome)**
1. Chrome에서 URL 접속
2. 주소창 옆 `⋮` 메뉴
3. `홈 화면에 추가` 또는 `앱 설치`
4. `설치` 탭 → 완료!

---

## 앱 사용법

1. **분할 선택** — 상단에서 2·3·4·5장 선택
2. **사진 추가** — 각 칸을 탭하여 갤러리에서 사진 선택
3. **설명 편집** — 하단 `설명 편집` 버튼 → 각 사진 아래 텍스트 입력
4. **배경색** — 하단 `배경색` 버튼으로 5가지 색상 순환
5. **저장** — 우상단 `저장` 버튼 → 카메라 롤에 저장 또는 공유

---

만든이: Henry's Photo Collage Maker
