/** @format */

const movies = [
  {
    name: "Black Panther 2",
    mainImage:
      "https://cdn.vanguardngr.com/wp-content/uploads/2022/10/images-6-19-1.jpeg",
    images: [
      "https://www.znbc.co.zm/news/wp-content/uploads/2022/07/BLACK-PANTHER-2.jpg",
      "https://thesource.com/wp-content/uploads/2021/11/Black-Panther-2-Okoye-Shuri.jpg",
      "https://images.thedirect.com/media/article_full/shuri-black-panther-trailer.jpg",
    ],
    about:
      "Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T'Challa's death. As the Wakandans strive to embrace their next chapter, the heroes must band together with Nakia and Everett Ross to forge a new path for their beloved kingdom.",
  },
  {
    name: "Captain Marvel",
    mainImage:
      "https://cdn.vox-cdn.com/thumbor/YBb8-4XPJRmmpdUJYqPP_hp0V04=/0x145:1688x1809/1400x933/filters:focal(726x441:996x711):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/61461869/captain_marvel_poster_1688.1537366019.jpg",
    images: [
      "https://images.squarespace-cdn.com/content/v1/59d7e2c7e45a7c0ce235bb55/1552056695609-2KJMOHURUOTUGJCJUQWQ/Captain-Marvel-Film-Review.jpg",
      "https://www.indiewire.com/wp-content/uploads/2018/12/CaptainMarvel_06.png?w=780",
      "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/brie-larson-captain-marvel-1567069037.jpg?crop=0.527xw:1.00xh;0.349xw,0&resize=640:*",
    ],
    about:
      "Captain Marvel is a 2019 American superhero film based on Marvel Comics featuring the character Carol Danvers / Captain Marvel. Produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures, it is the 21st film in the Marvel Cinematic Universe (MCU).",
  },
  {
    name: "Snowfall",
    mainImage: "https://flxt.tmsimg.com/assets/p13909803_b_v13_al.jpg",
    images: [
      "https://cdn.vox-cdn.com/thumbor/KNbd1AD7SUYAtQrknAcmUxnZqKg=/0x0:5184x3456/1400x1050/filters:focal(1888x537:2716x1365):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55559093/snowfallmain.0.jpg",
      "https://preview.redd.it/37b1k3ndhhv81.jpg?auto=webp&s=15adab32f59cc878faebc388e2573e4f2b0de44b",
      "https://i.ytimg.com/vi/Et4Bsv-q7DM/hqdefault.jpg",
    ],
    about:
      "During the budding drug epidemic in Los Angeles in the early 1980s, a crime family decides to make money selling cocaine. Meanwhile, a CIA operative also gets involved.",
  },
  {
    name: "Batman",
    mainImage:
      "https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_FMjpg_UX1000_.jpg",
    images: [
      "https://cdn.britannica.com/49/127649-050-31417AF3/Heath-Ledger-Joker-Christian-Bale-The-Dark-Knight-2008.jpg",
      "https://cdn.vox-cdn.com/thumbor/x2GxU4-nJ5O0ohk_-A-G2WQKqTQ=/0x0:1920x1280/1400x933/filters:focal(807x487:1113x793):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/70560605/jbareham_220228_ecl1072_the_batman_0001.0.jpg",
      "https://i.guim.co.uk/img/media/006e580ef0ee8c46c17b265f2bf66e7f0c61b746/3436_0_8487_5097/master/8487.jpg?width=465&quality=85&dpr=1&s=none",
    ],
    about:
      "Batman is a superhero appearing in American comic books published by DC Comics. The character was created by artist Bob Kane and writer Bill Finger, and debuted in the 27th issue of the comic book Detective Comics on March 30, 1939.",
  },
  {
    name: "Beast",
    mainImage:
      "https://m.media-amazon.com/images/M/MV5BMzE0NmVlY2MtZWFhZC00ZTU5LWEwNTEtOWNmNGE0YTJiZDIzXkEyXkFqcGdeQXVyMTQyMTMwOTk0._V1_.jpg",
    images: [
      "https://www.nerdpool.it/wp-content/uploads/2022/09/beast-idris-elba.png",
      "https://i0.wp.com/theubj.com/wp-content/uploads/2022/08/beast-trailer.jpg",
      "https://www.metacritic.com/a/img/resize/347d608c1e94969ed015bc694bf1a3b18c9b05d2/hub/2022/05/25/45c98982-9790-499f-9da4-1de5f3e07ef2/screen-shot-2022-05-25-at-8-04-50-am.png?auto=webp&width=1092",
    ],
    about:
      "Recently widowed Dr. Nate Daniels and his two teenage daughters travel to a South African game reserve managed by Martin Battles, an old family friend and wildlife biologist. However, what begins as a journey of healing soon turns into a fearsome fight for survival when a lion, a survivor of bloodthirsty poachers, begins stalking them.",
  },
  {
    name: "Im In Love With A Church Girl",
    mainImage: "https://flxt.tmsimg.com/assets/p10217303_p_v8_ad.jpg",
    images: [
      "https://i1.sndcdn.com/artworks-000060457250-4drdjj-t500x500.jpg",
      "https://i0.wp.com/hip-hopvibe.com/wp-content/uploads/2013/09/Im-in-Love-With-a-Church-Girl.jpg?resize=300%2C281&ssl=1",
      "https://static01.nyt.com/images/2013/10/18/arts/18RDP_IMINLONE_SPAN/18RDP_IMINLONE_SPAN-superJumbo.jpg",
    ],
    about:
      "Miles, a rich drug dealer, is smitten with Vanessa, a devout Christian woman. He vows to reform himself after marrying her, unaware that a few law-enforcement agents plan to capture him.",
  },
];

//  <div>

//    <div class="movie_item">
//      <img
//        src="https://cdn.vanguardngr.com/wp-content/uploads/2022/10/images-6-19-1.jpeg"
//        alt=""
//      />
//      <div class="movie_info">
//        <h3>Black Panther 2022</h3>
//        <p>
//          Queen Ramonda, Shuri, M'Baku, Okoye and the Dora Milaje fight to
//          protect their nation from intervening world powers in the wake of King
//          T'Challa's death. As the Wakandans strive to embrace their next
//          chapter, the heroes must band together with Nakia and Everett Ross to
//          forge a new path for their beloved kingdom
//        </p>
//        <h3>More Episodes</h3>
//        <div class="movie_images">
//          <img
//            src="https://cdn.vanguardngr.com/wp-content/uploads/2022/10/images-6-19-1.jpeg"
//            alt=""
//          />
//          <img
//            src="https://cdn.vanguardngr.com/wp-content/uploads/2022/10/images-6-19-1.jpeg"
//            alt=""
//          />
//          <img
//            src="https://cdn.vanguardngr.com/wp-content/uploads/2022/10/images-6-19-1.jpeg"
//            alt=""
//          />
//        </div>
//      </div>
//    </div>
//  </div>;

const mainContainer = document.querySelector("main");

function createMovies() {
  movies.forEach((movie) => {
    const div = document.createElement("div");
    div.innerHTML = `
     <div>
        <div class="movie_item">
          <img
            src=${movie.mainImage}
            alt=""
          />
          <div class="movie_info">
            <h3>${movie.name}</h3>
            <p>
              ${movie.about}
            </p>
            <h3>More Episodes</h3>
            <div class="movie_images">
            <div class="crazy">
            ${movie.images.map((image) => `<img src=${image} />`)}
            </div>
            </div>
          </div>
        </div>
      </div>`;
    mainContainer.appendChild(div);
  });
}

createMovies();
