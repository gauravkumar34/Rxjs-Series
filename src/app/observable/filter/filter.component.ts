import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent implements OnInit {
  constructor() {}
  dataArr = [
    {
      id: 1,
      first_name: 'Marleen',
      last_name: 'Vedekhov',
      email: 'mvedekhov0@wikispaces.com',
      gender: 'Genderfluid',
    },
    {
      id: 2,
      first_name: 'Avrit',
      last_name: 'Dumblton',
      email: 'adumblton1@squarespace.com',
      gender: 'Genderqueer',
    },
    {
      id: 3,
      first_name: 'Morganne',
      last_name: 'Gerard',
      email: 'mgerard2@eventbrite.com',
      gender: 'Female',
    },
    {
      id: 4,
      first_name: 'Alfy',
      last_name: 'Cunliffe',
      email: 'acunliffe3@woothemes.com',
      gender: 'Polygender',
    },
    {
      id: 5,
      first_name: 'Ode',
      last_name: 'Gebb',
      email: 'ogebb4@vkontakte.ru',
      gender: 'Male',
    },
    {
      id: 6,
      first_name: 'Fawn',
      last_name: 'Codd',
      email: 'fcodd5@princeton.edu',
      gender: 'Female',
    },
    {
      id: 7,
      first_name: 'Riobard',
      last_name: 'Whitlow',
      email: 'rwhitlow6@phpbb.com',
      gender: 'Genderfluid',
    },
    {
      id: 8,
      first_name: 'Andonis',
      last_name: 'Elcoux',
      email: 'aelcoux7@fema.gov',
      gender: 'Bigender',
    },
    {
      id: 9,
      first_name: 'Marlo',
      last_name: 'Dunkerk',
      email: 'mdunkerk8@baidu.com',
      gender: 'Genderqueer',
    },
    {
      id: 10,
      first_name: 'Cele',
      last_name: 'Worvell',
      email: 'cworvell9@rediff.com',
      gender: 'Agender',
    },
    {
      id: 11,
      first_name: 'Lesly',
      last_name: 'Maine',
      email: 'lmainea@ftc.gov',
      gender: 'Genderfluid',
    },
    {
      id: 12,
      first_name: 'Norina',
      last_name: 'Loughead',
      email: 'nlougheadb@hp.com',
      gender: 'Genderfluid',
    },
    {
      id: 13,
      first_name: 'Barn',
      last_name: 'Fetherston',
      email: 'bfetherstonc@icq.com',
      gender: 'Non-binary',
    },
    {
      id: 14,
      first_name: 'Jewel',
      last_name: 'Cottill',
      email: 'jcottilld@ocn.ne.jp',
      gender: 'Agender',
    },
    {
      id: 15,
      first_name: 'Marvin',
      last_name: 'Marlor',
      email: 'mmarlore@nymag.com',
      gender: 'Genderqueer',
    },
    {
      id: 16,
      first_name: 'Kim',
      last_name: 'Reay',
      email: 'kreayf@cbsnews.com',
      gender: 'Genderfluid',
    },
    {
      id: 17,
      first_name: 'Larine',
      last_name: 'Carette',
      email: 'lcaretteg@yale.edu',
      gender: 'Genderqueer',
    },
    {
      id: 18,
      first_name: 'Alfred',
      last_name: 'Dulake',
      email: 'adulakeh@hatena.ne.jp',
      gender: 'Male',
    },
    {
      id: 19,
      first_name: 'Gordon',
      last_name: 'Buckleigh',
      email: 'gbuckleighi@pinterest.com',
      gender: 'Genderfluid',
    },
    {
      id: 20,
      first_name: 'Noel',
      last_name: 'Hanwell',
      email: 'nhanwellj@foxnews.com',
      gender: 'Polygender',
    },
    {
      id: 21,
      first_name: 'Dusty',
      last_name: 'Fairhall',
      email: 'dfairhallk@wiley.com',
      gender: 'Male',
    },
    {
      id: 22,
      first_name: 'Kristos',
      last_name: 'Philpots',
      email: 'kphilpotsl@walmart.com',
      gender: 'Bigender',
    },
    {
      id: 23,
      first_name: 'Keriann',
      last_name: 'Innerstone',
      email: 'kinnerstonem@ted.com',
      gender: 'Polygender',
    },
    {
      id: 24,
      first_name: 'Allyn',
      last_name: 'Stiggles',
      email: 'astigglesn@accuweather.com',
      gender: 'Female',
    },
    {
      id: 25,
      first_name: 'Dionysus',
      last_name: 'Sandercock',
      email: 'dsandercocko@dagondesign.com',
      gender: 'Genderfluid',
    },
    {
      id: 26,
      first_name: 'Gardener',
      last_name: 'Silverman',
      email: 'gsilvermanp@earthlink.net',
      gender: 'Female',
    },
    {
      id: 27,
      first_name: 'Aldis',
      last_name: 'Hischke',
      email: 'ahischkeq@nymag.com',
      gender: 'Non-binary',
    },
    {
      id: 28,
      first_name: 'Crista',
      last_name: 'Lehrle',
      email: 'clehrler@ft.com',
      gender: 'Male',
    },
    {
      id: 29,
      first_name: 'Ginnifer',
      last_name: 'Grouen',
      email: 'ggrouens@weebly.com',
      gender: 'Non-binary',
    },
    {
      id: 30,
      first_name: 'Esta',
      last_name: 'Feathers',
      email: 'efeatherst@usa.gov',
      gender: 'Agender',
    },
    {
      id: 31,
      first_name: 'Wylie',
      last_name: 'Cicchillo',
      email: 'wcicchillou@free.fr',
      gender: 'Non-binary',
    },
    {
      id: 32,
      first_name: 'Carena',
      last_name: 'Rickaby',
      email: 'crickabyv@phpbb.com',
      gender: 'Bigender',
    },
    {
      id: 33,
      first_name: 'Penelope',
      last_name: 'Iacobassi',
      email: 'piacobassiw@drupal.org',
      gender: 'Non-binary',
    },
    {
      id: 34,
      first_name: 'See',
      last_name: 'Catley',
      email: 'scatleyx@nytimes.com',
      gender: 'Male',
    },
    {
      id: 35,
      first_name: 'Jodie',
      last_name: 'Ruddin',
      email: 'jruddiny@nasa.gov',
      gender: 'Male',
    },
    {
      id: 36,
      first_name: 'Seymour',
      last_name: 'Kitching',
      email: 'skitchingz@webmd.com',
      gender: 'Bigender',
    },
    {
      id: 37,
      first_name: 'Irvine',
      last_name: 'Caghy',
      email: 'icaghy10@youtube.com',
      gender: 'Non-binary',
    },
    {
      id: 38,
      first_name: 'Ephrayim',
      last_name: 'McSaul',
      email: 'emcsaul11@nationalgeographic.com',
      gender: 'Polygender',
    },
    {
      id: 39,
      first_name: 'Idell',
      last_name: 'Rodriguez',
      email: 'irodriguez12@shareasale.com',
      gender: 'Female',
    },
    {
      id: 40,
      first_name: 'Eada',
      last_name: 'Micco',
      email: 'emicco13@163.com',
      gender: 'Male',
    },
    {
      id: 41,
      first_name: 'Honey',
      last_name: 'Durling',
      email: 'hdurling14@yale.edu',
      gender: 'Male',
    },
    {
      id: 42,
      first_name: 'Raquel',
      last_name: 'Sammons',
      email: 'rsammons15@archive.org',
      gender: 'Agender',
    },
    {
      id: 43,
      first_name: 'Goddart',
      last_name: 'Farrens',
      email: 'gfarrens16@miitbeian.gov.cn',
      gender: 'Polygender',
    },
    {
      id: 44,
      first_name: 'Amata',
      last_name: 'Menicomb',
      email: 'amenicomb17@oracle.com',
      gender: 'Non-binary',
    },
    {
      id: 45,
      first_name: 'Josey',
      last_name: 'Escot',
      email: 'jescot18@nytimes.com',
      gender: 'Polygender',
    },
    {
      id: 46,
      first_name: 'Normand',
      last_name: 'Else',
      email: 'nelse19@altervista.org',
      gender: 'Bigender',
    },
    {
      id: 47,
      first_name: 'Reina',
      last_name: 'Heam',
      email: 'rheam1a@howstuffworks.com',
      gender: 'Genderfluid',
    },
    {
      id: 48,
      first_name: 'Barnett',
      last_name: 'Simcock',
      email: 'bsimcock1b@bloomberg.com',
      gender: 'Polygender',
    },
    {
      id: 49,
      first_name: 'Traver',
      last_name: 'Swindles',
      email: 'tswindles1c@si.edu',
      gender: 'Bigender',
    },
    {
      id: 50,
      first_name: 'Doroteya',
      last_name: 'Borwick',
      email: 'dborwick1d@pbs.org',
      gender: 'Male',
    },
    {
      id: 51,
      first_name: 'Kamila',
      last_name: 'Millar',
      email: 'kmillar1e@ow.ly',
      gender: 'Non-binary',
    },
    {
      id: 52,
      first_name: 'Renaud',
      last_name: 'Ector',
      email: 'rector1f@merriam-webster.com',
      gender: 'Agender',
    },
    {
      id: 53,
      first_name: 'Chris',
      last_name: 'Cockhill',
      email: 'ccockhill1g@oaic.gov.au',
      gender: 'Bigender',
    },
    {
      id: 54,
      first_name: 'Duncan',
      last_name: 'Piaggia',
      email: 'dpiaggia1h@odnoklassniki.ru',
      gender: 'Genderqueer',
    },
    {
      id: 55,
      first_name: 'Katee',
      last_name: 'Edleston',
      email: 'kedleston1i@tuttocitta.it',
      gender: 'Agender',
    },
    {
      id: 56,
      first_name: 'Cece',
      last_name: 'Rraundl',
      email: 'crraundl1j@aol.com',
      gender: 'Genderqueer',
    },
    {
      id: 57,
      first_name: 'Benjamen',
      last_name: 'Brennen',
      email: 'bbrennen1k@blogger.com',
      gender: 'Female',
    },
    {
      id: 58,
      first_name: 'Sal',
      last_name: 'Gargett',
      email: 'sgargett1l@themeforest.net',
      gender: 'Polygender',
    },
    {
      id: 59,
      first_name: 'Aluin',
      last_name: 'Barszczewski',
      email: 'abarszczewski1m@europa.eu',
      gender: 'Non-binary',
    },
    {
      id: 60,
      first_name: 'Gabriele',
      last_name: 'Piatkow',
      email: 'gpiatkow1n@zdnet.com',
      gender: 'Female',
    },
    {
      id: 61,
      first_name: 'Rory',
      last_name: 'Mutlow',
      email: 'rmutlow1o@slideshare.net',
      gender: 'Male',
    },
    {
      id: 62,
      first_name: 'Lyell',
      last_name: 'Lavis',
      email: 'llavis1p@paypal.com',
      gender: 'Male',
    },
    {
      id: 63,
      first_name: 'Harri',
      last_name: 'Clayden',
      email: 'hclayden1q@pcworld.com',
      gender: 'Genderqueer',
    },
    {
      id: 64,
      first_name: 'Enrique',
      last_name: 'Gooda',
      email: 'egooda1r@umn.edu',
      gender: 'Polygender',
    },
    {
      id: 65,
      first_name: 'Kathryn',
      last_name: 'Suggett',
      email: 'ksuggett1s@vistaprint.com',
      gender: 'Polygender',
    },
    {
      id: 66,
      first_name: 'Quentin',
      last_name: 'Danzey',
      email: 'qdanzey1t@taobao.com',
      gender: 'Non-binary',
    },
    {
      id: 67,
      first_name: 'Kareem',
      last_name: 'Prozescky',
      email: 'kprozescky1u@fotki.com',
      gender: 'Genderfluid',
    },
    {
      id: 68,
      first_name: 'Bar',
      last_name: 'Picford',
      email: 'bpicford1v@lulu.com',
      gender: 'Genderqueer',
    },
    {
      id: 69,
      first_name: 'Therine',
      last_name: 'Botha',
      email: 'tbotha1w@diigo.com',
      gender: 'Female',
    },
    {
      id: 70,
      first_name: 'Elicia',
      last_name: 'Kolushev',
      email: 'ekolushev1x@usda.gov',
      gender: 'Non-binary',
    },
    {
      id: 71,
      first_name: 'Myrtice',
      last_name: 'Jacobson',
      email: 'mjacobson1y@multiply.com',
      gender: 'Male',
    },
    {
      id: 72,
      first_name: 'Marj',
      last_name: 'Parren',
      email: 'mparren1z@homestead.com',
      gender: 'Polygender',
    },
    {
      id: 73,
      first_name: 'Jeffie',
      last_name: 'Fourmy',
      email: 'jfourmy20@ucla.edu',
      gender: 'Polygender',
    },
    {
      id: 74,
      first_name: 'Maighdiln',
      last_name: 'Loines',
      email: 'mloines21@blinklist.com',
      gender: 'Bigender',
    },
    {
      id: 75,
      first_name: 'Sibella',
      last_name: 'Kleehuhler',
      email: 'skleehuhler22@un.org',
      gender: 'Genderqueer',
    },
    {
      id: 76,
      first_name: 'Danice',
      last_name: 'Slayny',
      email: 'dslayny23@ca.gov',
      gender: 'Genderqueer',
    },
    {
      id: 77,
      first_name: 'Drugi',
      last_name: 'Stradling',
      email: 'dstradling24@nih.gov',
      gender: 'Polygender',
    },
    {
      id: 78,
      first_name: 'Stanly',
      last_name: 'Durdy',
      email: 'sdurdy25@opera.com',
      gender: 'Male',
    },
    {
      id: 79,
      first_name: 'Xerxes',
      last_name: 'Dalliwater',
      email: 'xdalliwater26@github.com',
      gender: 'Non-binary',
    },
    {
      id: 80,
      first_name: 'Courtenay',
      last_name: 'Higgoe',
      email: 'chiggoe27@ucla.edu',
      gender: 'Polygender',
    },
    {
      id: 81,
      first_name: 'Wyatt',
      last_name: 'Tedridge',
      email: 'wtedridge28@jigsy.com',
      gender: 'Genderqueer',
    },
    {
      id: 82,
      first_name: 'Florie',
      last_name: 'Adamkiewicz',
      email: 'fadamkiewicz29@yandex.ru',
      gender: 'Polygender',
    },
    {
      id: 83,
      first_name: 'Eliot',
      last_name: 'McGaw',
      email: 'emcgaw2a@aboutads.info',
      gender: 'Male',
    },
    {
      id: 84,
      first_name: 'Jackie',
      last_name: 'Reddan',
      email: 'jreddan2b@alexa.com',
      gender: 'Agender',
    },
    {
      id: 85,
      first_name: 'Chandra',
      last_name: 'Deniske',
      email: 'cdeniske2c@ucoz.com',
      gender: 'Polygender',
    },
    {
      id: 86,
      first_name: 'Nadeen',
      last_name: 'Tidridge',
      email: 'ntidridge2d@google.cn',
      gender: 'Genderqueer',
    },
    {
      id: 87,
      first_name: 'Adan',
      last_name: 'Sprouls',
      email: 'asprouls2e@salon.com',
      gender: 'Agender',
    },
    {
      id: 88,
      first_name: 'Tiffany',
      last_name: 'Pridham',
      email: 'tpridham2f@globo.com',
      gender: 'Genderfluid',
    },
    {
      id: 89,
      first_name: 'Hamel',
      last_name: 'Macconaghy',
      email: 'hmacconaghy2g@ustream.tv',
      gender: 'Polygender',
    },
    {
      id: 90,
      first_name: 'Celka',
      last_name: 'Leverich',
      email: 'cleverich2h@amazon.co.jp',
      gender: 'Genderqueer',
    },
    {
      id: 91,
      first_name: 'Kelby',
      last_name: 'Citrine',
      email: 'kcitrine2i@intel.com',
      gender: 'Bigender',
    },
    {
      id: 92,
      first_name: 'Donica',
      last_name: 'Dobbison',
      email: 'ddobbison2j@ted.com',
      gender: 'Bigender',
    },
    {
      id: 93,
      first_name: 'Felice',
      last_name: 'Skill',
      email: 'fskill2k@slashdot.org',
      gender: 'Non-binary',
    },
    {
      id: 94,
      first_name: 'Dedra',
      last_name: 'Eyes',
      email: 'deyes2l@stumbleupon.com',
      gender: 'Male',
    },
    {
      id: 95,
      first_name: 'Arte',
      last_name: 'Eisold',
      email: 'aeisold2m@furl.net',
      gender: 'Genderqueer',
    },
    {
      id: 96,
      first_name: 'Tadio',
      last_name: 'Stanway',
      email: 'tstanway2n@typepad.com',
      gender: 'Polygender',
    },
    {
      id: 97,
      first_name: 'Loraine',
      last_name: 'Worlock',
      email: 'lworlock2o@simplemachines.org',
      gender: 'Genderqueer',
    },
    {
      id: 98,
      first_name: 'Ashley',
      last_name: 'Hucklesby',
      email: 'ahucklesby2p@imdb.com',
      gender: 'Non-binary',
    },
    {
      id: 99,
      first_name: 'Cherilyn',
      last_name: 'Grasser',
      email: 'cgrasser2q@google.nl',
      gender: 'Male',
    },
    {
      id: 100,
      first_name: 'Abbe',
      last_name: 'Berthelet',
      email: 'aberthelet2r@friendfeed.com',
      gender: 'Genderfluid',
    },
  ];
  data;
  data2;
  data3;
  ngOnInit() {
    const source = from(this.dataArr);
    //Ex -01 - filter by length
    source
      .pipe(
        filter((member) => member.first_name.length > 5),
        toArray()
      )
      .subscribe((res) => (this.data = res));
    //Ex -02 - filter by gender

    source
      .pipe(
        filter((member) => member.gender == 'Female'),
        toArray()
      )
      .subscribe((res) => (this.data2 = res));
    //Ex -03 - filter by

    source
      .pipe(
        filter((member) => member.id < 6),
        toArray()
      )
      .subscribe((res) => (this.data3 = res));
  }
}
