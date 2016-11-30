module.exports = {
    rules:[
        {
            pattern:/\/api\/getlive.php\?action=origin$/,
            respondwith:"./livelist.json"
        },
        {
            pattern:/\/api\/getlive.php\?action=refresh$/,
            respondwith:"./livelist-refresh.json"
        },
        {
            pattern:/\/api\/getlive.php\?action=more$/,
            respondwith:"./livelist-more.json"
        }
    ]
}
