//
// 카페 셀렉터 지도
//

let markers = [];

let mapContainer = document.getElementById('map'), 
    mapOption = {
        center: new kakao.maps.LatLng(37.5626415, 126.9043775), 
        draggable: false,
        level: 3 
    };


// 지도를 생성
let map = new kakao.maps.Map(mapContainer, mapOption);

// 장소 검색 객체를 생성
let ps = new kakao.maps.services.Places();
let infowindow = new kakao.maps.InfoWindow({zIndex: 1});

searchPlaces();

// 키워드 검색을 요청하는 함수
function searchPlaces() {
    let keyword = document.getElementById("cafe_selecter").value; 

    if (!keyword.replace(/^\s+|\s+$/g, '')) {
        alert('키워드를 입력해주세요!');
        return false;
    }

    // 장소검색 객체를 통해 키워드로 장소검색을 요청
    ps.keywordSearch(keyword, placesSearchCB);
}

// 장소검색이 완료됐을 때 호출되는 콜백함수
function placesSearchCB(data, status, pagination) {
    if (status === kakao.maps.services.Status.OK) {

        displayPlaces(data);
        displayPagination(pagination);
    } 
    else if (status === kakao.maps.services.Status.ZERO_RESULT) {
        alert('검색 결과가 존재하지 않습니다.');
        return;
    } 
    else if (status === kakao.maps.services.Status.ERROR) {

        alert('검색 결과 중 오류가 발생했습니다.');
        return;
    }
}

// 검색 결과 목록과 마커를 표출하는 함수.
function displayPlaces(places) {
    let listEl = document.getElementById('placesList'),
        menuEl = document.getElementById('menu_wrap'),
        fragment = document.createDocumentFragment(),
        bounds = new kakao.maps.LatLngBounds(),
        listStr = '';

    // 검색 결과 목록에 추가된 항목들을 제거.
    removeAllChildNods(listEl);

    // 지도에 표시되고 있는 마커를 제거.
    removeMarker();

    for (let i = 0; i < places.length; i++) {
        // 마커를 생성하고 지도에 표시.
        let placePosition = new kakao.maps.LatLng(places[i].y, places[i].x),
            marker = addMarker(placePosition, i),
            itemEl = getListItem(i, places[i]); // 검색 결과 항목 Element를 생성

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해 LatLngBounds 객체에 좌표를 추가
        bounds.extend(placePosition);

        (function (marker, title) {
            kakao.maps.event.addListener(marker, 'mouseover', 
            function () {
                    displayInfowindow(marker, title);
                });

            kakao.maps.event.addListener(marker, 'mouseout', 
            function () {
                    infowindow.close();
                });

            itemEl.onmouseover = function () {
                displayInfowindow(marker, title);
            };

            itemEl.onmouseout = function () {
                infowindow.close();
            };
            
        })(marker, places[i].place_name);

        fragment.appendChild(itemEl);
    }

    // 검색결과 항목들을 검색결과 목록 Element에 추가
    listEl.appendChild(fragment);
    menuEl.scrollTop = 0;

    // 검색된 장소 위치를 기준으로 지도 범위를 재설정
    map.setBounds(bounds);
}

// 검색결과 항목을 Element로 반환하는 함수
function getListItem(index, places) {
    let el = document.createElement('li'),
        itemStr = `<span class="markerBg marker_${index + 1}"></span><div class="info"><h5>${places.place_name}</h5>`;

    if (places.road_address_name) {
        itemStr += `<span>${places.road_address_name}</span><span class="jibun gray">${places.address_name}</span>`
       
    } else {
        itemStr += `<span>${places.address_name}</span>`;
    }

    itemStr += `<span class="tel">${places.phone}</span></div>`;
    

    el.innerHTML = itemStr;
    el.className = 'item';

    return el;
}


// 마커를 생성하고 지도 위에 마커를 표시하는 함수
function addMarker(position, idx) {
    let imageSrc = './img/coffee_mark.png', 
        imageSize = new kakao.maps
                .Size(36, 37), // 마커 이미지의 크기
        imgOptions = {
            spriteSize: new kakao.maps
                .Size(36, 691), // 스프라이트 이미지의 크기
            spriteOrigin: new kakao.maps
                .Point(0, (idx * 46) + 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            offset: new kakao.maps
                .Point(13, 37) // 마커 좌표에 일치시킬 이미지 내에서의 좌표
        },

        markerImage = new kakao.maps
            .MarkerImage(imageSrc, imageSize, imgOptions),
        marker = new kakao.maps
            .Marker({
                position: position, // 마커의 위치
                image: markerImage
            });

    marker.setMap(map); // 지도 위에 마커를 표출
    markers.push(marker); // 배열에 생성된 마커를 추가

    return marker;
}

// 지도 위에 표시되고 있는 마커를 모두 제거
function removeMarker() {
    for (let i = 0; i < markers.length; i++) {
        markers[i].setMap(null);
    }
    markers = [];
}

// 검색결과 목록 하단에 페이지번호를 표시는 함수
function displayPagination(pagination) {
    let paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i;

    // 기존에 추가된 페이지번호를 삭제
    while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild);
    }

    for (i = 1; i <= pagination.last; i++) {
        let el = document.createElement('a');
        el.href = "#";
        el.innerHTML = i;

        if (i === pagination.current) {
            el.className = 'on';
        } else {
            el.onclick = (function (i) {
                return function () {
                    pagination.gotoPage(i);
                }
            })(i);
        }

        fragment.appendChild(el);
    }
    paginationEl.appendChild(fragment);
}

// 인포윈도우에 장소명을 표시
function displayInfowindow(marker, title) {
    let content = `<div class="content_style">${title}</div>`; //** content_style로 이름을 적어 인포 윈도우에 표시

    infowindow.setContent(content);
    infowindow.open(map, marker);
}

// 검색결과 목록의 자식 Element를 제거하는 함수
function removeAllChildNods(el) {
    while (el.hasChildNodes()) {
        el.removeChild(el.lastChild);
    }
}

// 확대 버튼 
function zoomIn() {
    map.setLevel(map.getLevel() - 1);
}

function zoomOut() {
    map.setLevel(map.getLevel() + 1);
}
