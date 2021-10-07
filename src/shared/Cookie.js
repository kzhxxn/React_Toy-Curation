//값을 가지고 와서 쪼갬
const getCookie = (name) => {
    let value = "; "+document.cookie;
    //세미콜론으로 쪼개는데 이름을 가지고 응용해서 스플릿!
    let parts = value.split(`; ${name}=`); // [aa=xx / aaa;abbb=sssss;]
    //2일때만 실제로 존재하기때문에 2라는 숫자로 비교
    if(parts.length === 2){
        //pop은 기준 뒤의 요소를 날려주는반면 shift는 앞으요소를 잘라서 붙여줌
        return parts.pop().split(";").shift();
    }
}

const setCookie = (name, value, exp = 5) => {
    
    let date= new Date();
    date.setTime(date.getTime()+ exp*24*60*60*1000);
    //백틱쓰는 이유 네임 밸류 여러개 합을 더해줘야 해서
    document.cookie = `${name}=${value}; expires=${date.toUTCString}`;
}
const deleteCookie = (name) => {

    let date = new Date("2021-01-01").toUTCString();
    console.log(date);

    document.cookie = name+"=; expires="+date;

}
export { getCookie, setCookie, deleteCookie }