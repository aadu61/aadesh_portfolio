'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9bbba922383feb4c11a6ad9a7c5fd2ec",
".git/config": "56aa86dd3f40af7f47f9f4548dc39b14",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5db43cf3f7fcd00737c1f0918e4f6912",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "17270a75442b200bf22bb9dd71f3aa92",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2dbf076c836c8d2fc9f21eadf278b389",
".git/logs/refs/heads/main": "cddaa7e6145ec9a42510fcfadce0f89b",
".git/logs/refs/remotes/origin/main": "8cb8e2f5b147fb54e08958994cdb51f7",
".git/objects/01/638a78cd988280b2fa4cdd3866907db5e2f028": "5640b51edd56c6e243768275c709f2d7",
".git/objects/03/4dde5096b88bc68a4bf8afea4cb8c296b55989": "6d860da88a49a36006a6b288f4a3787f",
".git/objects/04/373efafe8872368abd5ece25768d6440491338": "2709f0d2bd9b5a73390b174e7b93c446",
".git/objects/04/d8901ed6fd33fc4c39c55fe317a5fa5e456926": "3c3f02c6288a59b0732493f9e9ff4a4b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/05/a6537841cd87494363ff4534e3c80b573dc982": "bdb51e2cd5c4581b6d138de85f28e2f0",
".git/objects/0b/bd73d233af9dfff1d3115b3c4eb345ab1dd90f": "5eae06183dfa65b3b5c809e9e6d21502",
".git/objects/0c/19607ef4b102470a8528418266bbf4fd23b072": "0c2ab7ccf638027a28832c4686ac4042",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/9ddab74077094a726265e502d0a586859e76f7": "f2718c79ead820e2771ac4e22097e4f5",
".git/objects/1b/1a78b3567f1cee30b873e911c79cc42e482cd3": "4f01296884ffbefaf01540e91895b774",
".git/objects/1b/ccb3d07bfc77df8c08bacda9b2e97733ae08af": "eaedbcd714adee7aee97c3f0b7131f5d",
".git/objects/20/137102ca72e1236bf875a1be8313a144eaa8c8": "7b90461f74693283c1c51fd0bf9ae263",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/7fee50f1ac33a54544464c3b36843b0bbf3010": "2da5c3161616a111add82ebf8498a7ca",
".git/objects/22/9b7784cc5c367e66e6ee3bf3839a83fb2cf72b": "9f76bd45e6fc5071b96ec070f6f34ec0",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/29/1c6eb5942c6901864df048b255e70239885295": "ac99a43f29d2e51aa4533c7e1e9329be",
".git/objects/29/c3b081574e6b5849e2abbe5d677825a8ff5db9": "fa2d066950c3bd03b752a5566b20c015",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/dfdc06b2c5b92339d6ef2f55210048e2da44aa": "9f476e1da51b9f09ca4bab2cf819cd22",
".git/objects/2d/39ab560cc89e6cc8c3b18f8836ad48e6118239": "3e640fcbab1a8c7d8b93e8cd97b1a752",
".git/objects/2e/2a237bfd9fd1c0adfe0080968d1521b71d7eaf": "e3e13c4ad6997c98b1136c6290ef0d4e",
".git/objects/30/af74fef94d9aeccae4f0141c39cf4be36b02d8": "f6776d6f82a6562d6afc561b78c8b273",
".git/objects/31/047e9ef65ad5452a851c52581b09222314919f": "4d20d9a03a5592045e9a72f145af5de8",
".git/objects/34/308ed9ac28c8b683a362475862cee083faeb57": "6e6f900e39395d5a6a8179a4e8990129",
".git/objects/37/48d3bee1112940a1481c03a07d7b9002388105": "099db223f97759f0203cc8872735ab97",
".git/objects/38/31a8b6cb19d877b5f093e92fbb310bd8395c41": "fe838f361097dd6e92a28987cd0156c3",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3a/864820a458696b48aa17028f5187b02bb51c0d": "566c450147a31ddbe4593a823fc0ab1d",
".git/objects/3d/90b8181e78fb5c721af5a57369b9cf4b5c903f": "4e49dac718c1d1736eb4627b5d29418b",
".git/objects/41/a7c4f88b754c95d01e51b2995cb2262e9eb6e8": "a73f4804a10b320b51c9a2ca14c9e004",
".git/objects/42/cdd4cddf31874b922c01ed69e53b6210b3dda8": "d0dc58007a4bce43d19fd0f3ed0a97ff",
".git/objects/42/f8cc6bacc8f1820eb35997e2aa39dc6f40b667": "422bb7124a2261d839e7ace9fa7e8577",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/47/6d2debc2db961e9c48e46b8071c91c2f40ac89": "fe8d49f6b42b8ee3d722a91468e0cbed",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4e/9fdbea6402c88d73107a3421a8bab47753075a": "08314b081f65bd10f08b79d755952457",
".git/objects/4f/9b2b42080243750c968de1286bedcd5ca8135c": "4f284ebcbf9f9222f0e960781b24fbad",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/50/4acf73f44bf2c6729fd513d6b849a76aa14fa3": "f14870488187e3f8217e360dc7ca6b13",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5a/3a8e204f4fecfd1dd82aba22c12ca5acc3512a": "6f67685f9a2b8f1cbc1764376e561c56",
".git/objects/60/c6839c4702752d33741a4ed51162df6e8d3f3c": "30f95eeb969cac6af56893f5699591fd",
".git/objects/61/78f7f86c1cc0f5750bd4872d878691d2dfcf44": "c03c9be7243e12965e10e500e6b13e68",
".git/objects/66/4759e6a6525cb382526f4b5afed1fc6d443741": "eea3d319fac12160b8044c5cb1c7b7b8",
".git/objects/68/2f4e569e88e10e8a344eef889959dcd200ec26": "4b691f0df683e60e3a19727f391cb686",
".git/objects/69/7c5ad1ffa9364ab0b95ff0edf557fa2f080c38": "ede4fb4ca533386d10ade1cbf1ec5c0d",
".git/objects/69/f6ba18badcdb5ed02721febbaffc4a0588ae03": "6ade274c0a6cc5a523fc74bd8aa96f3a",
".git/objects/6a/f70b9db808b023de7933ea2018088b20aec7f2": "ed265c81f679cadde8c2aac7433a7b0e",
".git/objects/6e/e11da1f96788a2b4033721a9a79450473a37a5": "9ea8d2d0c8b898c1980eb01d09dd3711",
".git/objects/73/a24557dee531a5aa1e7eaa6a9abb7721300950": "24746a042383b1c9c282cb388802274f",
".git/objects/7b/1c35a68d9290dc57c66f2766fbaa57e8ab09e7": "005615f52169c5b39de7b5accaf65455",
".git/objects/7b/a98f9515f3527df469ff06f9b100ffd4eb675c": "eb533f44018e050f0029200f3c66ffbf",
".git/objects/7d/122662603f9748ae3ab7dabb7b7eb029943230": "8251f60fa9ceee51ca811d3b2585a800",
".git/objects/81/3cc3f1d18c345f82bbcdd4d00ed9d3e0fcd0b7": "ccf1bbbeb33595ca50616d635da22f00",
".git/objects/81/b00c2e9abea9a012dd7356813735c20bade097": "8839e4f897bd48e900e78d70aa4e3c90",
".git/objects/83/15165e32dac925af2452360e419ebcb975d3a8": "1ff83f90725c9fb5e76eb015d55fbd6f",
".git/objects/87/1a4c29fa9e23a90e02b12b252d56ebfec2b1c3": "7bb137adaabcef5b53605f6b4f28bd9a",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ad8f568abf931b256bec64108353ca23ff9002": "51c69c5fd339ca10c5b7b4ee597ff59e",
".git/objects/8d/0924e6311bc43f76a3a167fad912aeedf39724": "174db2acc82a68b206e76752ad7169a2",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/90/4a15c50b1e28f2b89dbe0554545bf7c2d11b96": "504001be95e30f4f0239bc263f9bb5a1",
".git/objects/94/44be51eebb310a8e8db4228d8a6955916d0973": "99242303fe1037b486af7df90c4cf130",
".git/objects/94/887c43580b9448278293ba7e48db3a6e2ab84a": "239936d294a45193fb81e1213fc37d2d",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/97/fc54d8532957c25ee8ce1cdf673cb18b45fde3": "eb5d0e0cadaa5e9ccd06418a9b745a11",
".git/objects/9c/6b13d676327ca0a4dbe0a322685bd79c653d06": "67fb6496e0d356f57001ec2e3de2b5be",
".git/objects/9f/168779f592896fcb4a0e2b8fecb258e67ee7d6": "7a1dce3b77787cf8ea779db8a570d5f5",
".git/objects/a4/b750efb09a05f1bb281cc80825ac84f0499c60": "f8a22eddb240cf8ba5fb70fe21d8e3f3",
".git/objects/a4/c62dfeb8f06ec8f86f0dbb30bdf6435f24b8bc": "b1faa799fc6f2e475648f1166bd51f43",
".git/objects/a6/df9a092c01a5adf2a4561cdb98fa5f37f9fef4": "733f7d355ce03500480e4be869f545e6",
".git/objects/aa/d27ba58f0a66d0a4326b76847a7c2e88a60ea7": "4049d8d6dfe3c4e094ab83e3cbe1a41a",
".git/objects/b6/36ad5892aea29fce11535b637266efe0c1996e": "fd98615a65d292ddc92a2b5bc95b814c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/fdc7506c2694cbf0d6565735fdae31edb79428": "a9749752cf5fa87ff3e6b0453e64e233",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/c0/1e8ca86e7d7689d19ae5cd50f321a42e5b7840": "b999228dbaa4b3ca614141eb9ffbe01c",
".git/objects/c3/e94382ed7f9036f7d22993c9499310f8680e17": "fa0cf736b249cd1eb79038ea4a43ced0",
".git/objects/c4/1e1942ee952244d7058cd447a8ca9ab211b1d9": "6bfc91f423a65d6fdd9f39563d5ac79c",
".git/objects/c4/8dbb0b1df888c62a8728350d0c99ce000b9bad": "7d7cd9684e28b5e714409a56ee4ca3de",
".git/objects/c8/c964fd1ec1a2d7fa010307256e971f632d1637": "15dfa4776244345142a36cab2b0b4b48",
".git/objects/ce/a9906cd5298876e0f6f3d5a8783299e42ed457": "526268a36d5b3ef6732dda2fd85b32fc",
".git/objects/d3/9890c189d3390b7723157ada4ae08a6554ae9a": "778f6279f0b625b01bcef898e326b3d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/db/e31348da8edeac0c140a9ea17daac04d958848": "1a9db12a62a511c6eb7ab3ff4fe41ae1",
".git/objects/dc/90873bd9769d0fbf1a34923c5117229650311f": "2f94f22d2c385435b89c2794dc7bc78a",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e1/e49938e51d7c4a4304a075a30e8622d0aeda76": "3479fafc57680966a883b609300f869b",
".git/objects/e6/7e8de44ac856b86e0e045edf3b9b0c7c924d88": "47146f964339efb731faba41021d752d",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e7/09209a96fc96865ea1ed6511fc03ab421d69ef": "4e6550b9aed474af2600e1f898555c01",
".git/objects/e8/797a57d9d9477ee2166c57ba0adf3954e971a4": "74ffd63cde5b2102872acfd68ba8fde4",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/2117f287402c779bacc686328da4d39a7cf2cb": "98e2a5b81da447a022217cf70f6b69b8",
".git/objects/f0/45dad2961303bf3df06276becf33e15a199920": "283ad0dfe7c3b309825e558698316414",
".git/objects/f1/72d66325627934e637a4d18757f94df538b15b": "f9a66b98eb3109b4d5772d012f7289eb",
".git/objects/f2/d9857425cb0139040bd56eafff8daa81b139f9": "5e73caa16987b7a3b1de1da949965ad0",
".git/objects/f2/e9ca4c3664e489179c01e13b25436c4c70fb0f": "f18481720a6283b4e52d4c9a3b231bde",
".git/objects/fb/e896d8ee7ae82c013ff1b0f8b2f290b7b95edc": "a7201aae7b4042a935dbb7d8bbe82d00",
".git/objects/fd/b9d09b27b67de9a6dd834a1ea0ea7b479b252b": "0a77672d4718c1878f772bafbbe39f31",
".git/objects/fd/ed848465c00c41bc12f3aa5c61bf0dbfda2a66": "3343ef3ecddd2894e9ffb97829988980",
".git/ORIG_HEAD": "ef88eef38f07d7b013bbb5535452b4b7",
".git/refs/heads/main": "0522f71ab2418d3cca50086484b0e60c",
".git/refs/remotes/origin/main": "0522f71ab2418d3cca50086484b0e60c",
"assets/AssetManifest.bin": "86dabd6418118b4da16a300ac64980ca",
"assets/AssetManifest.bin.json": "6f3e1b797dc0349dda11fe86fd937b30",
"assets/AssetManifest.json": "1f202de5a4e64a2d759186c3d00c0601",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/gif/starfall-gif-46.gif": "e54008fec896ec085da559cf537d6f32",
"assets/assets/icons/android.svg": "a5edf188314ff37a4f513eaccb8d546b",
"assets/assets/icons/apple.svg": "6be40eb4dcaeafda971f070ef687ac8e",
"assets/assets/icons/graphic.svg": "630269cfd18d3d8cf578673a89b377d7",
"assets/assets/icons/ic_dart.svg": "74b5a20e303e4bcd30d2f4e850659d6e",
"assets/assets/icons/ic_firebase.svg": "e1b3ca5c118c5327aaafe13fd80508c0",
"assets/assets/icons/ic_flutter.svg": "fe8fc92df24e337a48b940b4f1753ade",
"assets/assets/icons/ic_github.svg": "91fc7cd187b65073322024169d2cd416",
"assets/assets/icons/ic_instagram.svg": "b6c744edbbd685bced0fe1f69d0a0e89",
"assets/assets/icons/ic_link.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/assets/icons/ic_stack_overflow.svg": "5255deb16545c6ea2388bf2684ddc47b",
"assets/assets/icons/ic_whatapp.svg": "5902f900874bc62c207813495b81c30e",
"assets/assets/icons/website.svg": "eb7f68d101ed55ef94b1a819515a4781",
"assets/assets/imgs/5424482.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/aadesh.jpg": "4d44beabaaac945eebdeb36c24def1b0",
"assets/assets/imgs/Aadesh.png": "4f584d5dc56032281f3e4c69623bbdee",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/ic_muver_move.png": "02de3e0fb95e2badf08313f5df0b4e06",
"assets/assets/imgs/IMG_0107.png": "33971748e753b8b6fb9301b9118f7e95",
"assets/assets/imgs/mover_move_bg.png": "e0c96e7d265d7af5cd08f352325b131d",
"assets/assets/imgs/muvr_user_bg.png": "cd054cb6e1b3fa507510157859147932",
"assets/assets/imgs/muvr_user_logo.png": "c2314a49536c8baa5586d7350782e96d",
"assets/assets/imgs/wm.png": "4476b09a89fd95794ec5e4d11cf739a8",
"assets/assets/imgs/wm_logo.png": "1d012d03ee552cdcb4322589439e6002",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/fonts/MaterialIcons-Regular.otf": "46bfd93afef2052385b9cdea3e08f3dd",
"assets/NOTICES": "6f0d34b3c30e40635509a46f7c656714",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.ico": "76922f67a9b2bf5750814021f9e6342f",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/apple-touch-icon.png": "8e31529924eb7c968464397280bc3e9c",
"icons/icon-192-maskable.png": "0c839622e8f7d75d5c355993d26f188e",
"icons/icon-192.png": "b95dc35a2c3d14ad9f7eee61cfd323dd",
"icons/icon-512-maskable.png": "0068789c387d30036cc8085cbdcb6eba",
"icons/icon-512.png": "fa6500a107cf9012889e400866905eb9",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "16a7c288edd93c4b11053cd45c10e96a",
"/": "16a7c288edd93c4b11053cd45c10e96a",
"main.dart.js": "81f46800e7064a478b95f17dc6098bcf",
"manifest.json": "b432ce4ac70302af9a9cd71291df9a87",
"README.md": "93bc614db5523440bcb32905e3808462",
"version.json": "f124181e58b12572810925130e6735b8"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
