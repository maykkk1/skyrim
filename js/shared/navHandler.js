const route = (name, type) => {
    sessionStorage.setItem('infoRouter', `{"name":"${name}", "type":"${type}"}`);
}