
document.addEventListener('DOMContentLoaded', function() {
    // Initialize map centered on Toulouse
    var map = L.map('map').setView([43.6047, 1.4442], 13);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap'
    }).addTo(map);

    // Club data
    var clubs = [{"id": "peacock-toulouse", "name": "Peacock Toulouse", "address": "20 rue de la Bourse, 31000 Toulouse", "lat": 43.6015, "lng": 1.4423, "type": "Vinyasa, Hatha, Yin", "description": "Un lieu unique qui r\u00e9unit un studio de yoga, une cantine v\u00e9g\u00e9tarienne et un concept store. Id\u00e9al pour une exp\u00e9rience bien-\u00eatre compl\u00e8te au c\u0153ur de Toulouse."}, {"id": "le-singe-yoga", "name": "Le Singe Yoga Studio", "address": "21 Place du Salin, 31000 Toulouse", "lat": 43.5954, "lng": 1.4443, "type": "Tous niveaux, Dynamique, Relaxation", "description": "Dans le quartier des Carmes, un cocon de douceur et de bien-\u00eatre. Professeurs certifi\u00e9s et abonnements ultra flexibles."}, {"id": "bagheera-yoga", "name": "Bagheera Yoga Club", "address": "Sporting Village, Toulouse Nord", "lat": 43.645, "lng": 1.444, "type": "Vinyasa, Yin Candle, Flying Yoga", "description": "Au sein du Sporting Village, un espace o\u00f9 modernit\u00e9 et traditionnel se rencontrent. Cours doux ou dynamiques pour tous."}, {"id": "yogaventure", "name": "Yogaventure", "address": "42 rue de la Pomme, 31000 Toulouse", "lat": 43.6033, "lng": 1.4461, "type": "Hatha, Vinyasa, Doux", "description": "Bulle de calme en plein centre-ville pour \u00e9liminer le stress du quotidien. Professeurs bienveillants et approches vari\u00e9es."}];

    // Add markers
    clubs.forEach(function(club) {
        var marker = L.marker([club.lat, club.lng]).addTo(map);
        marker.bindPopup("<b>" + club.name + "</b><br>" + club.type + "<br><a href='clubs/" + club.id + ".html'>Voir la fiche</a>");
    });
});
