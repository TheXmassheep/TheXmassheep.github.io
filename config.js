var config = {
    style: 'mapbox://styles/yonen/clhhsfams01f001pn035ker1q',
    accessToken: 'pk.eyJ1IjoieW9uZW4iLCJhIjoiY2xiOW11aWNxMDAxODN4bzd0NHFvc2wyMCJ9.tt2BCFolCmqLZR9cFyVD_w',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Story of the ANCIP project',
    subtitle: 'Who and where are we?',
    byline: 'by V.J.Schober',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'ancip-network-overview',
            alignment: 'left',
            hidden: false,
            title: 'The ANCIP Network',
            image: 'images/ANCIP_Logo_final_variant_1-2048x506.jpg',
            description: 'The ANCIP netowrk is situated at three locations within germany',
            location: {
                center: [5.22841, 51.24355],
                zoom: 5.24,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            
//            onChapterEnter: [
//                {
//                    layer: 'ancip-network',
//                    opacity: 1,
//                    duration: 5000
//                }
//            ],
//            onChapterExit: [
//                {
//                   layer: 'leipzig-point',
//                    opacity: 0
//                }
//            ]
        },
        {
            id: 'leipzig',
            alignment: 'right',
            hidden: false,
            title: 'ReCentGlobe Institute, Leipzig University',
            image: 'images/leipzig.bmp',
            description: 'The Leipzig Research Centre Global Dynamics (ReCentGlobe) is a central institution of Leipzig University. ReCentGlobe is dedicated to the study of globalisation projects in the past and present in a broad interdisciplinary cooperation. More than 250 researchers from various faculties and subjects work together at the centre. They cooperate with the Graduate School Global and Area Studies in the training and further education of young academics. The centre has several labs for transregional cooperation, digital humanities, science communication and knowledge transfer. ',
            location: {
                center: [12.37816, 51.34086],
                zoom: 15.99,
                pitch: 47.50,
                bearing: 0.00
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'frankfurt',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: 'images/prif.bmp',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [8.66460, 50.10492],
                zoom: 16.00,
                pitch: 47.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'duisburg',
            alignment: 'left',
            hidden: false,
            title: 'Third Title',
            image: 'images/inef.bmp',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [6.80073, 51.42844],
                zoom: 16.00,
                pitch: 47.50,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
