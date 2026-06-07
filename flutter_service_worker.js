'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "dda48325e078ef433cfadd9b59bdda6b",
"version.json": "03acefc4795e8573b194262cd3a4419f",
"index.html": "26c4c5f5983717b84ead2675a82cc915",
"/": "26c4c5f5983717b84ead2675a82cc915",
"main.dart.js": "ac70c7b59ad8cb8549bcebb2a2c9b735",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "b5dae0d97ac70e8d40e92525525bf8bc",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "0d4c1e42ed79fa8e7efcdf268c751482",
"sitemap.xml": "c8b6ecf63f1dc48262555ddbafaabf66",
".git/config": "6585036910ca204cf0fbc1860b29d636",
".git/objects/66/1b2cbece1749c4f0692b9b6cd401d32dcc38dc": "bc3c42ee6469d44f1c6c20e3bcd041b1",
".git/objects/3e/cc5f5dcbb7a04b1852412b30c6690051422ef0": "e6220d1c92ab197d81c74b0c62ffa3cc",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/68/21d02c33624e6d2278587e06ffaee5018c179e": "b23b90b63094d9049f88f7005550a3ad",
".git/objects/57/2c90979f8b92537a619e595bf2281fcf86a9c0": "5c03cb66889814ba44af38b0ab13eb92",
".git/objects/3b/4204b3ceb827c93c646819d8219cf2efe9ff9b": "67cacc87b808865ec27841f99f7d1339",
".git/objects/03/f9acb89c788c3327979bf9cab0253be9b3bf71": "39106a4635c8487e519fb0a1f0a161a0",
".git/objects/03/f2858a37661af9de5b078fec014c77511dd3e2": "3e27a027d231e027d8a8958caecf90cb",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/04/0b701d49ac6b853271cc411741b136d835de51": "1c8249c765e5cfd4a44f00d1f445d2a9",
".git/objects/6a/8b3d9a42aed944514455516d46782e5997a47d": "5988afaf12e73b16292456ab50b1b34a",
".git/objects/6a/ccc0b7a2921b420cffc7a3bad83b1c382ceb8a": "2043748a755452270c15014c5da86ee9",
".git/objects/35/d96bf1dc67d741e9780ac007eb29167fd4b3fd": "cfc62da6be749638b739cb415e219927",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/69/9f4d6e9c5585b102bad9da475ffe9e030530ac": "cd0f490edc8e9a6815d9bc0c8482de46",
".git/objects/56/fcf5a886a21e38ee15b3af0ffb7c4a55c1c95c": "88b26811456bb1a3af5284038ba94f60",
".git/objects/56/421e3f82e44eb7ba9f1452647ef6f471ea474b": "c0c3fb84a4479bf8ca88fc0345cf8df9",
".git/objects/3d/1931d0dcbd2447843131f6bd6f8c3e85c5c1cc": "a02e6489270da1bed8c41ef94a8d9595",
".git/objects/58/b6c5d00d81fe5f0d89b17b9128e7dcc0b4b1d2": "0d689db3be8f5d0c2a5578468e8e2c01",
".git/objects/58/2f0ef83d910e82a1666f4def4139edeb89125d": "370dd40e9e954f56f5421f4b170f9ad3",
".git/objects/58/faa2778c972481bd93a304c8c48818af012450": "8970d4dc19f5ba47363da2018a1cd4fd",
".git/objects/58/a6f0af286f4f82c52fd74b1a711f5a30aa83b3": "91c835dc74a55a16e2004fce5ee7e0fb",
".git/objects/67/52d9cd2014936081f6ff26b133385f7ffbfc72": "218c127dcbe55cf79be7159d8195520e",
".git/objects/67/48ffcba9f592be74ab23035e2793ba3916fbf7": "52dd5f1ccd594b1f29ccd6e616ca2d16",
".git/objects/0b/ff45409821fc1b8e83cca0c6f57f23a6085a30": "ac426a41e9b7b79198ce08fabf85176c",
".git/objects/93/b1d453d3e1d668426c06e01bb21a19bd55f302": "e03b2dca899f0f948167dc4c2a78ec4b",
".git/objects/93/5f8bf2bd9a52610298605fc7345f1127767e88": "5a0493b1e9390192b0a92d37351dd120",
".git/objects/94/93c553ec1fc93d84de37b16339023ac5652e66": "407c8bfb6bd84b06fd3a10ff467c086d",
".git/objects/94/cdead453314ab3f0a9e0ef61fce4ab7dc4f42c": "0edb6ec7db7e2974d5b3b7d7a8827efd",
".git/objects/94/0e224db6fd4278604cf25e7bf64ab663fe05b9": "ee1b623b61179c2ad534ad9655f36486",
".git/objects/60/053787f2e6232c0325fe73580818c02fd95a9f": "2183cc0119f69f1183a55554ac7e28ee",
".git/objects/5f/213220b974feb976f5edbaa0db261b6b09e5cd": "dc7fc0cac4c898f265a1fd69ddca117b",
".git/objects/9d/5d9826eeda5edfe0aa0ce79f765f45494fe956": "40a092ee0d199a3925dc64ec98496512",
".git/objects/9c/a005071b15dccddf4fdc47ec387e93abd5845a": "bec19540331158ab79f28c38331727c4",
".git/objects/9c/111c63a67dcf7f909d2f7f0c2990c4ce478106": "c8b13599abd2142b44eb5364740cd9d3",
".git/objects/a4/0a60b8408106694d88e813059084c7774741a2": "a00673b2f34c4411474cf5e155d4678a",
".git/objects/b5/cbab4dd0c86487bdbb48d348eaf0371686d315": "5e1ec9fe23012c51ae12166f56ed3c6b",
".git/objects/ac/2fc915f58015d132c8d4de4470e9a2a8560354": "51846c3f8c056eef777bcfc42d491e93",
".git/objects/bb/5589d9257a8dfda15d7d6f97e6a09d79ff788a": "c9d4efe59084428a8aaaa0ea0ed9750b",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/be/81fbc33ade3f654ffe038b62019edd002544bc": "de228585e273f5f5a278f6f2cc9d069c",
".git/objects/df/dc9147264eafa411a2436709a00a62f924813c": "b59e27b6158abde59f03c8d830c453ae",
".git/objects/df/30d6d08a430fd11c5261aad46dc2cc7e59d051": "d767b8c640ada879243f394a89c26fe1",
".git/objects/df/131895b79b31b6d71eec2e5f11504f98b9d452": "a043b0d03647326887b9b56b51f72cf1",
".git/objects/df/901a0d5d6ee176f2e73e536ca081f238ee8476": "d5ec84eea5fc13abc1bba09d70670289",
".git/objects/a2/1af920ba7a6dc704bdeb941d04268b6233c059": "a2bf4dc57524e874c8fb12f9b31dd087",
".git/objects/a5/dfd04369657b09f17593c7e0e749bee8e33b0e": "ddd8ad033e7210932a5e24da4442b1bb",
".git/objects/a5/39eb302d6cfc70e891394938aa72393b3a333d": "b59489216175297beff97bf13271c8a5",
".git/objects/a5/a75164e69690f245692199419eec85110fcda3": "dd08c12bbded49146c55b9316f61aa96",
".git/objects/bd/916b02f9b9277745f0d68ad7d25abf4d2f88cf": "97da43718bc202a0b3463bb3c94e5bde",
".git/objects/bd/bc0b5eafa78f0a83e3b539287806e0d7ad14b4": "244104d8e735aba48436eb32133fb631",
".git/objects/d6/59820bf0b1c57565a9b5e7755bbaf14d87d9d4": "c6069277311b1e1f1060535ce047c4b6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/ae/260a7449003564ba4b6141d3c41772222eb3ba": "47ddcc7e981fa84fa62208051576e302",
".git/objects/ae/a159470c562f408ea7f97c0da3b35367ef52bc": "eccfe436c33b0a4a8dd22a4d47d33912",
".git/objects/d8/c7a6e76ea520b199ad34f76be22319ff62ed99": "3551485bc9831f56faa43af8eb5273da",
".git/objects/d8/59f1b6070279e1d3c10e1a82524468e36f58d7": "f3793fa987ea8338d83e9f4d58d8ab87",
".git/objects/d8/19f6b34fd4761b9b3e64bf2b5373cdfca60730": "cbb54f4294ce0f4bfb0e46ed6067d3a9",
".git/objects/f3/2033928185e913e2cd2b5be3510fd33078ab48": "06b7fbd0ed1511a9ce121bcfa438c4cb",
".git/objects/f3/6bd6a1c8f698e26c736fa529f375f2741b6413": "8a2b66ad8aa9c80454f058a0b97b2043",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/eb529bf0111abd401a8162d1ce972604c1cb44": "a58389374eb4d7ce85cea84b81dc47e4",
".git/objects/ee/415f32aa5a7ad2a450d53286333f97346a94df": "271912da3b660217c17290c8e53685e9",
".git/objects/ee/fed797a6b359b14618fb6e4a1dfa52c6782b37": "0b65462960df5478debc15e12da86939",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/b50b8f20adcd932456f0940f83fe66c4cd83ab": "838cc6549d04a616c2ea8f321b5ee16c",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/d68a929673b139575d61cd0edd33c4b2c53258": "e6cb5194780e77c7a497a80e6a66597d",
".git/objects/e3/2802da082fc595e09f861d1a1e94d8d84e6120": "cda29dff026717308ed54ecf46e105cc",
".git/objects/e3/6b8274e671a5ab6542f4e326713f66fcbd5e47": "b3419e5385316360ca492581e1fb15c5",
".git/objects/e3/0452e3458c1a73b0a3760feec0e7a7089bbfb9": "a71ac949492200b0ed9ebf821aa37f70",
".git/objects/cf/fd5e2f04192e553d729d6a9e4f695285ba6100": "e92857b3f0c44b9f3e56624cde728aa6",
".git/objects/cf/53553760cd195fed17839c3d705824c3b83933": "ea4698535b71ba71dac4ecc3a249d807",
".git/objects/cf/957367370cabbce27fab69fd5eee0ea9ca6525": "eafb391e6a15fd132bac3e7e1fb27af2",
".git/objects/cf/a0311ef7e5aa4c0e37ab6f94e94eb2e1efb096": "3b9d310da36d62d4f2ac624ecb61670c",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/ed/1b9d7b246ecdb82d28e6ab03dfd13fa5acd51a": "d0c5e2a152ea379c5af8bcaeac22c266",
".git/objects/ed/e0d942f90a1866725f0575988cfb9b5e39c582": "f650699753704eb613386519f2202cc8",
".git/objects/c1/2ce6387b699876df31d35d5158213db920418b": "8d6b36d52ec74ba4fdd0cc727ccb2d38",
".git/objects/c6/6dce81aafbdb485796c0c28069f8d311a544ed": "8dcd9c9da0acc4ec4f9678bc7040704a",
".git/objects/ec/e3d022776ae7b11e7f8fb37e7f69389c663cb6": "3fb8f8dbc4f81747e7dcccc35f7966c1",
".git/objects/4e/9f1a498f95ab753256b2065498f7c8eece898a": "b12cf34d1db34bc6ded796cf112d721a",
".git/objects/4e/65164856ee6398b0efe5b34df60c33afad0dff": "58f1b2c8d28745ebc79ef83d15df022c",
".git/objects/4e/93d543582f956a5409d04a1a1662f97407f60e": "92730e1527cbad9357a0861f85f7e11e",
".git/objects/20/c1fe33b59ee1aea55318e2a6e4c535095dcc87": "c9e1b4b0b03a8c886a828c11fdff7821",
".git/objects/18/1884b8426d0d315fa07e4c39a5b2cce0c90288": "558a969d3e64b1d57fca76be7ac0f282",
".git/objects/4b/7376bba5d7d784dfb4f98b8ca2ece01454fe6b": "6e58ee1d9b307f07156d4ab18afc0ac8",
".git/objects/16/a7c96160a5d1d3c1b369b15dd63a6739237fbe": "738360591ae35ed75991481c51de9b86",
".git/objects/16/7afc17feba564b05cb5ac30fd9e0eedb311f71": "54071e90d7d0334d49fb118d2f6c341a",
".git/objects/42/444449500028f8a3dc26cfe33761b6978022e3": "b362fa50484e82499aed2ab2cd38a25e",
".git/objects/45/bc48c9e88bb0f5922cfb23a26594cd9a105dbe": "e152059d805ceed01a4bb36fa5174bb4",
".git/objects/1f/542ae4e0dc256b77693bbdec71735836c31feb": "91c744b9bf74cf5cd795f46b1db0d3a8",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/4194efad4bb1a47533c9766c84306390960f08": "b7dcd5358d9db06b2eba06cfae7e1423",
".git/objects/74/b62414c2b167a1306f855583d0ae56b9b73846": "1fced4c5fd1c8b1bc3c4a690e7db2c60",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/bb232981e052d2597b86d90a449896f56291b3": "f5e98e8c812363a7a7ca9266f9abe129",
".git/objects/1a/56586cfcbd5f3329cefe50242a038b67282857": "2f5e5bf88d0231831a1b9475fff6ff8d",
".git/objects/1a/2ceb33f4085094f72ba41d11a2f4a14dc20ce7": "9c592e1e4684dd4f12b3be33e173cd7e",
".git/objects/17/e19f792e5b232f4fbcf271962eefd884c05c3c": "ffe2a88f95a2a135824432aa8d9cb48d",
".git/objects/7b/2ecb815cf3490aef507c1aa14707f0a9b39457": "c6be8938a913c0d3a7c9f66fbd049035",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/8f/d64710efe52105e5a2043e2639fff04ec49294": "b43ccc4d5ffba8e4ba9e940a06fd3afb",
".git/objects/8a/0e8f2b0cefad46e485687213bb4aa156aab136": "75006c31e89ea80e3609ade225195e43",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/5159ff031089529ff630cd8b7a09b82dd4245e": "12c8b69dc596ec4db3e7016f6534b556",
".git/objects/10/79fbbd8a8ad0e26938a80226875cfd6e44fe0f": "925c707a621bd30ee5c9d3fc616ba19c",
".git/objects/4c/0dd364f8f33825d2a24ab520ba321ccb269a81": "f37a9291e09fb1cff65c592eac62402d",
".git/objects/26/7272057d8ea0d9420316a2dd9bc2b50ebf8c92": "cc5bc2d104372b0798add852bbea8772",
".git/objects/26/34e6d9085f4daab65acfdfa8244508711eaae4": "5cc0d368f22bb74c13e898af95bee0f6",
".git/objects/21/937688c22ce5e115d72931750867309f7ad57a": "5df8b3e1a723da5f32c1a87acf79c10e",
".git/objects/81/99ce9bc841de275043710b29f5989e14a0c465": "b011a6d4e9a2242fe97d593068a08382",
".git/objects/86/f6b5ea1ce01bbf3a7815a77808fcd6bd6ed1d3": "e4a5be718684201d5f9e4f5358608bb4",
".git/objects/72/bdb16e36f7de0481fe9bd5a4a4e9c84c12fd69": "19cb88b25f3d05c39368e5009b2fe691",
".git/objects/72/6beadef96757ea285b5b0cb5c9b8d5294f75bc": "546af8475602fe4026c857382ff2af69",
".git/objects/44/b273f3dc569fe865ab76f00d7669988362c161": "fde458afb2aacd6e6fe26884fca7d98f",
".git/objects/43/95ccb54198cbd1806644330402c53ac67a255b": "337324f6a0ac9c7b8019cb505eabe26f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/58ecd83de551e7a7468559db942defb0e9ed2c": "598be89bda945a62d98ee1a938c2a4ac",
".git/objects/9f/4547377bf6084da3ceab6518d0e375534f096f": "d5c6847a5210614a8650f429333c5919",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/8eec5bb8ce04e32dcc5ee800cca10fe2f6983b": "70c5d6c152cf9f144dbc5950e60083b6",
".git/objects/00/2f5f6291c0057e57133a8c358ab1d903ed1551": "a568d9624bf3125f24ecbd01dbb7ec69",
".git/objects/00/3eeb5e248a592cff9a7fbcf33454954a1b2dd8": "3a767bd41b23631ef4932452926247e0",
".git/objects/6e/6d9f6d89416687d8742fac6240c58319a3f6c5": "293d3561f207aef5c83340e1b51b5ae0",
".git/objects/6e/72e0de98b503e2f0018551eb4ffbe86ae01d27": "277b276d8a2b7a0771b34abdf25842cb",
".git/objects/9a/34caf687aa2a49ff4a59fbab9c4bc067d9d7a2": "ee43c08521fa0a87436b6db57d48e44b",
".git/objects/5c/87f51bf7f62509d3ec4a49714bbc22f35129f1": "f2148f823b536a29ac67e94f314dd897",
".git/objects/09/94391915381c871eef67b1dc9bfdfc2be14ddf": "4039f426a3a784a8bb7265df85e05dde",
".git/objects/5d/980c6af5730bf1e1e6d1f1cd1a35bf876b46a9": "af9a8832baf8b6c88aa2d67e60b09ee3",
".git/objects/62/84f7c388232bbd4b225c63d580836197d346d8": "d0841b46511f0ce059eeffb275e9bfb6",
".git/objects/3a/a6dee5f3a069d5d0053a77e297a7765c782c6d": "2f7621306e3a685fa81815ec752e7e61",
".git/objects/3a/4a406a03373c188c15908306766f46e02a089d": "66f11f93711e6370c40c71db810733d9",
".git/objects/54/3f29e07b781cc4f00c04370e288ad329455adc": "489e91f518787f9fea411348e910d010",
".git/objects/53/b36ebe4a263a8380c6ba01943ea91c58cb043b": "c144b6c9d9db43d3cee50f8da9479adc",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/2c6707b4b8a0099340f3d9c4345eeb20cdbcaf": "7bebed696819cd7b8b2a309d7722e9a8",
".git/objects/5e/a767186fe307829c185cab499eb0fa9e97d72d": "fbc591136ee0cad5d9bf8d7391a7c516",
".git/objects/37/5b3700e07dcf0ff160a022eece435b481cf035": "17c699d18d30647b8227c909472d03ca",
".git/objects/08/eee995d2c54766ced963e83dc24096683a6067": "1d1adeab4878753325e079308bbc4fd6",
".git/objects/6d/92fa2f97763432bc5d0c44a7a6fb25d5f03585": "c5991ed32af3bd23107a61df4ea21bfa",
".git/objects/06/be03bad4f83f63acaa3c4df6485027d330ebe9": "331a77af71422b3b1352b95f59cf3157",
".git/objects/06/c609b56fdbeffd1afe4f9be0823d13d57c5428": "b0b7d7938371c92a59ce4fee291912de",
".git/objects/52/5c1df76ac07c69a473fa4fb0260670d2f78072": "d945450abbd41a535f86e1fca1daabf2",
".git/objects/55/4b36b6baa1e6021f544c8de2d15985717408c3": "9c83cb037eb431ed1753f1f66efd1ade",
".git/objects/63/95e8098819fcc818b4dc8db46dbfc3944b5c18": "040f003f0d0fec44589b12a91d222b2f",
".git/objects/63/e41c4bcec0c97e89259e0e8b6e3256d4c8bb4a": "eda592b1b02b11020a2c47e4ad707b24",
".git/objects/0a/51e869dc761903067855e799faa419aeb90ba7": "c87d804af2a0aee9ed11e0797fafcbb9",
".git/objects/0a/cdca51513ef6a4fcda4c57d0cb5cc3d49a1619": "a39b5b4ad71f677d4dc37f620b141acc",
".git/objects/90/05feebc67b4755cf22d10611b398dc066d3198": "048d2cdaec5bffa20a5d87615a6cdbcf",
".git/objects/d3/77450e01ab4ddf2c858c019cf24ad363f01323": "019e53490e7de45ad1cc40473f7d391f",
".git/objects/d3/47033989f3881699439e68c703b70eccd90a63": "9542afa1ff76085a52185bb3a6000e73",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/c6b7ac7578c732528c28cf20f8cc42aae0aa6b": "b4ea64645bb48732331100cd67144829",
".git/objects/ba/4bf076df3da140826ef13c7ff45b70f4638e3e": "0e21f721cb9baf956570f7c5c600d755",
".git/objects/ba/8da60d3ee7fcc2c2354858c862759302b09cb9": "7dc60d0ddf2e5557c77ccd4217df33fe",
".git/objects/ba/931d4e19dabc86a160864791c4337b0c6f9104": "f78d2b042e00d9343e5068960accb2ae",
".git/objects/b1/97b914311de77eb657c8bc68b9c338711f8b7b": "c6bc9bf548757d92511e3b6ba42983b9",
".git/objects/dd/30d07649342efef570ea91516ac0daf446ee4e": "848d2942856da1438512960b2822bdec",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/a9/4eaa687b71394f2b704d357297eba97f60d702": "2cba9814285d8df1b711428e04b439cc",
".git/objects/af/573e26b0115c738015605d02a95999606c14fa": "d66ea4648207cb4caa6fd10cac060df3",
".git/objects/b7/a55aace4af983613da7a2e00a0dfb90be0b1b6": "3de37ca30883aad85f1d173d7f4cf364",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/a31f049c4d6bb2a8d419c58bd0ef094328f531": "7c8b93506e0c887da2e43385c096226c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e54cbad7bc70e69ef061721bad94b28c94e2ce": "caf5a289a7afabf6d9b32d149a2143b7",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ef/bbda89c4fd0dfa97299838ff183e32b53df877": "4a22c32f7ded3767336e1ac2fcbac022",
".git/objects/c4/876d54f534dc139c616ae38b352d5e442221bd": "6a45f0acfd1133db26a2db995a4447b3",
".git/objects/c4/ca4f7bcecfd5522f3ecb1ce5675a74fec093b3": "a53503aab78fdffe4387391d5aa7a318",
".git/objects/e1/245ad1fa906fa94bfe7a4c890247ba366b6e5f": "07fda29a10830990ce6e78177c8adf16",
".git/objects/f9/7b1a69f053dddd92d2177c0d465b0028fa700f": "8a00077fc50d911cffd35d22fa1f90fd",
".git/objects/f0/0b1ff3c2b764274ecee8b3a55c44fb84fed879": "d43a0d04600f845b08417e69b830ffea",
".git/objects/f7/6ea8b12edff9faa74191bcf918e2ee191c057e": "61ba43e38ea7d56cb5dcd21222e0c11c",
".git/objects/e8/e07364c2a6dd807a94e8bb75255de5cb4661cf": "fa33db9bdc2726c177a95b47e980d25d",
".git/objects/fa/fc62c64ccd6e1fc87be4f4573e64f26e4677d8": "578e01a03d4dd0cb8816016059375e1a",
".git/objects/ff/3476dc525244c4e9b6ba7a9e649a94cab7ebb1": "057200ec4e756012f11bc2a56abeb181",
".git/objects/c5/02301b5db24f4620d7453c4867dd1579ed9a65": "84890f3244a9e8ed68adee6646f3892b",
".git/objects/c2/8fc49e82ceb0cb90eec56204bcb1592f18cca4": "44d33ee6280c1dfe932873e525f8e166",
".git/objects/c2/ce8568a85fc1565e3b16c42b63db2f6a1e532f": "d49fdb96a5c22452bfd8a518eacd5a78",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/26ddfad5aec2601e535c098c108717c1516668": "293c5067f44868d32f9012c695c3405c",
".git/objects/f1/b2c377e12b6c49aaee32205becdafdceb35f5a": "7536dfc7eb15d3b984c1aeb493061db3",
".git/objects/f1/a2573acb1975ebb1bde4b26f4814b11de374d4": "2adf9146da9576762fbdf723ee7ef5c9",
".git/objects/e7/83f535b7917008d84d2714e5156cf48bfbd95c": "b69d36e62ab5fbf21f61dee2798eec9e",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/f8/5897d9944fe3a9c384f6b0dbfa7ebbc2b4f8b1": "b801b42626c23dfb8e808772b11b8746",
".git/objects/f8/c00c5936aeb1990a2c793f25e9dfe6ceaa7703": "33764e4abdaaffd6e4668d729b499cd0",
".git/objects/ce/63aff8f0ee541060fc18227d66f4c7b58897e6": "519948adc4e8d80b8b9666071835173b",
".git/objects/e0/4e4775d2400c8d9cc3fab2b49712ac33dc910b": "a1831e934149674e82cf68614e5c3bcd",
".git/objects/e0/b7ed2d3bb35581f31cae3e72578b11d7113942": "28039dc499339821d0c542cb03b6848c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/36dbef8ef9abca3e001179626aecba83066887": "4860964387e93ff609f8bb51ef57c7c0",
".git/objects/2d/72a24db625ebd1e251b2b8c24cea48fb7051f2": "c1b26b28930f3ac18f3aa55c502820ca",
".git/objects/83/5cf5a13064eec52302ac4df566deaf40d23c59": "64b21a6135e23098fbd5eb7fb248f648",
".git/objects/83/bd7af6f5cae84b06e8262e23f804354f696539": "68bd0ac0927781193cac52e6eefe34c5",
".git/objects/83/e8c4523807d973f2b47daf716ee739252b47a4": "58f756d5afeacf0a923c3462c6b7114b",
".git/objects/1b/e18f9e28fff2f6a7f5c1b0727f6feb481bb8e7": "823497d2ecbe1b10bbc2ef89a8570265",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/84/d4b7aaf320d697a8508b933032b7331581513c": "508daa9fbcdac707e2f2c3afb4e65a17",
".git/objects/24/3b367f3ab8244f13885030339fc8cde67f7dbd": "cacf37db841ef1a57e59879e053e7e15",
".git/objects/24/74f11f8b4c76d23fd8809b8ee6e323c4457a8e": "a27464d5dd36e0ebe02af781159e936b",
".git/objects/24/6c214dcf2afff0cae8cf0bd674970d96f7d914": "2b7e031caaf5491486bf6565de86eb68",
".git/objects/24/05ecde4adef406507ed8fbe60db1c9de796cc0": "eec21c58dc2e4723bc214d31e89c0a40",
".git/objects/23/82b1f0fa085f186ad84844799c5ab03e0e48fd": "c4cc754880a6c2c91d4371d293e063aa",
".git/objects/23/0b88c9f3f48d604bd956db369840118e35c790": "422ed3a9da76fc6f4099b087b12e3074",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/8d/2040a9ffda771b39e19c23bfbc18e8b47c65f4": "3569d899211a6e38ec36a3378bac543a",
".git/objects/12/2ebf51cbbb5ffaa0b8c0e91d4568e30cc87259": "987d825565e9fad3c2c01cfff3cb45cc",
".git/objects/8c/f372d24c1402d72c0fa6af205fdab9c409d403": "c9af71d4f87a77ecf8199dc463c79618",
".git/objects/85/0a79893113b0e0d13bcae281e18fe327f8f621": "09ed97778c252a33503b232c7f51620e",
".git/objects/1c/24369aa72ef926dc2ff87d28baf56bb6cf51ec": "47cad389a56495a4bec1fd005394ba32",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/1c/c64c7fcb1a6cd45d85b786021c84276f09c3f1": "e13e6470a5f979a3a50f3ea7d41a7c07",
".git/objects/82/d8a634a54c1e8e5e7aeb791f514fe8a54901a9": "74fb01381a6119b776c9261636b88502",
".git/objects/82/d18a30a80ca86f651901b037e0bbfb00fc2e79": "d9450b5bd06504b0b26402087001f1fc",
".git/objects/2e/ffeb8fc3a25def0ef5212ddf8608b87e37bd98": "161b2fc2816cd106b8434eccd75d0532",
".git/objects/2e/31ef2e98cc658810f8389c68bd33abb2614934": "97a70124bff2e817f79d6ab78c6608da",
".git/objects/2b/222659a4bfb20dc36f1e0f426d453fe4c4e646": "6c4c3207d76f468c91e06a85bba766c0",
".git/objects/47/e2d79adb4c176239aaeadb79bc81d8ac5670b4": "3e95869e5aefd2372781c16dcb35c959",
".git/objects/78/a851874ab3be3ded748619e5dc5ee08de4f13c": "3ef405442989f261af5ce5aaeb8d9f77",
".git/objects/13/998930a9c1407ac2a65219cccbd9171d2ea6c9": "78813ee34012d11775f4bb22e590ab23",
".git/objects/7f/83722e28da8f5a7c9b6d4957966dde225dce73": "cb3838a81235c0050b16b0421f87f72d",
".git/objects/7f/500a086dcc4920c61a07654d5602e9676c6317": "2f29b8224ca0e4c76d13627120422bd7",
".git/objects/14/39f4e30d2cf4b41ce87afd7088b1c2d132458f": "2bf053519ba2432a6fa8f21f204eaa97",
".git/objects/8e/b9c618a1cfa7f8f2fa5d92351358181f8c7b81": "7b58cfb784fe4a46798571f87e1ec219",
".git/objects/22/735fed405676b94f09adf57d3913f3e3decb25": "22bbb1f732e0b215f543f22e74d7deea",
".git/objects/22/174c5e2e0f1a9f262f08ab2d369bac2961f4fa": "0a135c4f478e7c21a46dca3d74787258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5f12964e80e941824e04dfebba79ba2a",
".git/logs/refs/heads/main": "193e0333f6e6e9151691216441cdafcf",
".git/logs/refs/remotes/origin/main": "b66350ff446d86f70823f7fa3ea5f899",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/original/refs/heads/main": "d26a9a623438847b590392bcca051e08",
".git/refs/heads/main": "1c9f8d053bb3686a4dfcd2804b801dbb",
".git/refs/remotes/origin/main": "1c9f8d053bb3686a4dfcd2804b801dbb",
".git/index": "f16efd84c31480e0aafc34e0fc19bc42",
".git/COMMIT_EDITMSG": "7a8a2233d31e9c0fdb58407c5d5d08c9",
"assets/AssetManifest.json": "a386141e2682544a6ab49a1ed561a275",
"assets/resume.pdf": "9d33a2ee19b4ff64def93740b2ad7061",
"assets/NOTICES": "91b244eda85b2005e943c69fe51956e5",
"assets/FontManifest.json": "e363a47fc8878b322af0dea56540fe8e",
"assets/AssetManifest.bin.json": "dc80d46ce23a5f8af4762518a64899f6",
"assets/packages/simple_icons/fonts/SimpleIcons.ttf": "429f4878395a78daa21abc07b2954fd9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "2dea6a14df78a2d3afe473b36e523e0a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "2ed1d8b1a81016efb156724fd07587fb",
"assets/fonts/MaterialIcons-Regular.otf": "301153bf8e376c102e63d700daef89d1",
"assets/assets/pfp.png": "be8e41f56609f6b30895745661698dee",
"assets/assets/typeblast_card_thumbnail.png": "241653ef6bca7d1192a8d38d07ef1c0b",
"assets/assets/sova_thumbnail.png": "35b505b3542fa23a9a815f41271ef81c",
"assets/assets/lin101_card_thumbnail.png": "45246b2f1df908523e23b1ec68862e5f",
"assets/assets/mapmates_thumbnail.png": "3bfc54586552e58a1e4d7ec017066ee3",
"assets/assets/sova_card_thumbnail.png": "f2fc0ff59134c2088b0b3ecf2ee0c3e2",
"assets/assets/geoguessr_thumbnail.png": "cfd70a3ac465f5e5ccfacf449e7ffd17",
"assets/assets/mapmates_card_thumbnail.png": "a7ef94743b31fd0c09a3499a5b1f9767",
"assets/assets/geoguessr_card_thumbnail.png": "cd92336aeaff0e8aee9fda32fda84c7e",
"assets/assets/plus_sign.png": "a29ae9e0d3d688b144c5e76a0d0fba41",
"assets/assets/typeblast_thumbnail.png": "f360f929a7b1a4e9466c6dce5668ad4a",
"assets/assets/lin101_thumbnail.png": "6cf0fc77b553daefa74284253f12b6da",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
