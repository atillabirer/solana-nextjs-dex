import { PublicKey } from "@solana/web3.js";

export interface CoinlistItem {
    name: string;
    mint: PublicKey,
    logo: string,
    decimals: number
    balance? :number,
    uiAmount: number,
    symbol?: string

}

export const defaultList: CoinlistItem[] = [
    {
        mint: new PublicKey("So11111111111111111111111111111111111111112"),
        symbol: 'SOL',
        name: 'Wrapped SOL',
        logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"),
        symbol: 'USDC',
        name: 'USD Coin',
        logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"),
        symbol: 'USDT',
        name: 'USDT',
        logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("EKpQGSJtjMFqKZ9KQanSqYXRcF8fBopzLHYxdM65zcjm"),
        symbol: '$WIF',
        name: 'dogwifhat',
        logo: 'https://bafkreibk3covs5ltyqxa272uodhculbr6kea6betidfwy3ajsav2vjzyum.ipfs.nftstorage.link',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("JUPyiwrYJFskUPiHa7hkeR8VUtAeFoSYbKedZNsDvCN"),
        symbol: 'JUP',
        name: 'Jupiter',
        logo: 'https://static.jup.ag/jup/icon.png',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("J1toso1uCk3RLmjorhTtrVwY9HJ7X8V9yYac6Y7kGCPn"),
        symbol: 'JitoSOL',
        name: 'Jito Staked SOL',
        logo: 'https://storage.googleapis.com/token-metadata/JitoSOL-256.png',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So"),
        symbol: 'mSOL',
        name: 'Marinade staked SOL (mSOL)',
        logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/mSoLzYCxHdYgdzU16g5QSh3i5K3z3KZK7ytfqcJm7So/logo.png',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("MEW1gQWJ3nEXg2qgERiKu7FAFj79PHvQVREQUzScPP5"),
        symbol: 'MEW',
        name: 'cat in a dogs world',
        logo: 'https://bafkreidlwyr565dxtao2ipsze6bmzpszqzybz7sqi2zaet5fs7k53henju.ipfs.nftstorage.link/',
        balance: 0,
        uiAmount: 0,
        decimals: 5
      }
      ,
      {
        mint: new PublicKey("85VBFQZC9TZkfaptBWjvUw7YbZjy52A6mjtPGjstQAmQ"),
        symbol: 'W',
        name: 'Wormhole Token',
        logo: 'https://wormhole.com/token.png',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr"),
        symbol: 'POPCAT',
        name: 'Popcat',
        logo: 'https://bafkreidvkvuzyslw5jh5z242lgzwzhbi2kxxnpkic5wsvyno5ikvpr7reu.ipfs.nftstorage.link',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("3psH1Mj1f7yUfaD5gh6Zj7epE8hhrMkMETgv5TshQA4o"),
        symbol: 'boden',
        name: 'jeo boden',
        logo: 'https://bafkreid2t4f3i36tq4aowwaaa5633ggslefthxfdudaimog6unwu36umha.ipfs.nftstorage.link/',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("6D7NaB2xsLd7cauWu1wKk6KBsJohJmP2qZH9GEfVi5Ui"),
        symbol: 'SC',
        name: 'Shark Cat',
        logo: 'https://cf-ipfs.com/ipfs/QmYZnjijjtoH2YDCPxUc6advSuSbsCre4gDjtS2YTUfw7P',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("Av6qVigkb7USQyPXJkUvAEm4f599WTRvd75PUWBA9eNm"),
        symbol: 'COST',
        name: 'Costco Hot Dog',
        logo: 'https://ipfs.io/ipfs/QmSqddq1svm7VpaLCcSQzCea58J8xRo8vhHuVJgdRPUw1J',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("7BgBvyjrZX1YKz4oh9mjb8ZScatkkwb8DzFx7LoiVkM3"),
        symbol: 'SLERF',
        name: 'SLERF',
        logo: 'https://bafkreih44n5jgqpwuvimsxzroyebjunnm47jttqusb4ivagw3vsidil43y.ipfs.nftstorage.link/',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("ZEUS1aR7aX8DFFJf5QjWj2ftDDdNTroMNGo8YoQm3Gq"),
        symbol: 'ZEUS',
        name: 'ZEUS',
        logo: 'https://raw.githubusercontent.com/ZeusNetworkHQ/zeus-metadata/master/logo-v1.png',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("WENWENvqqNya429ubCdR81ZmD69brwQaaBYY6p3LCpk"),
        symbol: 'WEN',
        name: 'Wen',
        logo: 'https://shdw-drive.genesysgo.net/GwJapVHVvfM4Mw4sWszkzywncUWuxxPd6s9VuFfXRgie/wen_logo.png',
        balance: 0,
        uiAmount: 0,
        decimals: 5
      }
      ,
      {
        mint: new PublicKey("bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1"),
        symbol: 'bSOL',
        name: 'BlazeStake Staked SOL (bSOL)',
        logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/bSo13r4TkiE4KumL71LsHTPpL2euBYLFx6h9HP3piy1/logo.png',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("ukHH6c7mMyiWCf1b9pnWe25TSpkDDt3H5pQZgZ74J82"),
        symbol: 'BOME',
        name: 'BOOK OF MEME',
        logo: 'https://bafybeidov7gddabmqke3fozpuvlllp3q2c537f2vfyyf6or4spbbao6cee.ipfs.nftstorage.link/',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("27G8MtK7VtTcCHkpASjSDdkWWYfoqT6ggEuKidVJidD4"),
        symbol: 'JLP',
        name: 'Jupiter Perps',
        logo: 'https://static.jup.ag/jlp/icon.png',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("DezXAZ8z7PnrnRJjz3wXBoRgixCa6xjnB7YaB1pPB263"),
        symbol: 'Bonk',
        name: 'Bonk',
        logo: 'https://arweave.net/hQiPZOsRZXGXBJd_82PhVdlM_hACsT_q6wqwf5cSY7I?ext=png',
        balance: 0,
        uiAmount: 0,
        decimals: 5
      }
      ,
      {
        mint: new PublicKey("45EgCwcPXYagBC7KqBin4nCFgEZWN7f3Y6nACwxqMCWX"),
        symbol: 'Moutai',
        name: 'Moutai',
        logo: 'https://bafybeihn5s2ykzqwpmb6d4dbowecovc7vo2wjx7zjltur7sl4ykfhbmoaq.ipfs.nftstorage.link/',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("jtojtomepa8beP8AuQc6eXt5FriJwfFMwQx2v2f9mCL"),
        symbol: 'JTO',
        name: 'JITO',
        logo: 'https://metadata.jito.network/token/jto/image',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("5wU4tUcAbds7d5cmnGK2otHa9gbayYsD2mhz1reR6c91"),
        symbol: 'LUIS',
        name: 'Tongue Cat',
        logo: 'https://bafkreihtcqx42secvikbvwtqzcrc2fldtapwl6w4qwdfu4yxh43n6l243u.ipfs.nftstorage.link/',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("5oVNBeEEQvYi1cX3ir8Dx5n1P7pdxydbGF2X4TxVusJm"),
        symbol: 'INF',
        name: 'Infinity',
        logo: 'https://cloudflare-ipfs.com/ipfs/bafkreiflz2xxkfn33qjch2wj55bvbn33q3s4mmb6bye5pt3mpgy4t2wg4e',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("D8r8XTuCrUhLheWeGXSwC3G92RhASficV3YA7B2XWcLv"),
        symbol: 'BAG',
        name: 'catwifbag',
        logo: 'https://i.imgur.com/WjsUWFL.png',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs"),
        symbol: 'ETH',
        name: 'Ether (Portal)',
        logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/ETH_wh.png',
        balance: 0,
        uiAmount: 0,
        decimals: 8
      }
      ,
      {
        mint: new PublicKey("HhJpBhRRn4g56VsyLuT8DL5Bv31HkXqsrahTTUCZeZg4"),
        symbol: '$MYRO',
        name: 'Myro',
        logo: 'https://i.ibb.co/9nr3xFp/MYRO-200x200.png',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("CQSzJzwW5H1oyWrp6QhfUKYYwyovbSiVDKnAxNfb1tJC"),
        symbol: 'STAN',
        name: 'Stanley Cup Coin',
        logo: 'https://arweave.net/urnvj3NcnKmwEWNLDQJetp2OFP_nu3tB8HPdXwSFg7U',
        balance: 0,
        uiAmount: 0,
        decimals: 5
      }
      ,
      {
        mint: new PublicKey("3NZ9JMVBmGAqocybic2c7LQCJScmgsAZ6vQqTDzcqmJh"),
        symbol: 'WBTC',
        name: 'Wrapped BTC (Portal)',
        logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/WBTC_wh.png',
        balance: 0,
        uiAmount: 0,
        decimals: 8
      }
      ,
      {
        mint: new PublicKey("HZ1JovNiVvGrGNiiYvEozEVgZ58xaU3RKwX8eACQBCt3"),
        symbol: 'PYTH',
        name: 'Pyth Network',
        logo: 'https://pyth.network/token.svg',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("Adq3wnAvtaXBNfy63xGV1YNkDiPKadDT469xF9uZPrqE"),
        symbol: 'WIT',
        name: 'What in Tarnation?',
        logo: 'https://cf-ipfs.com/ipfs/QmeqEFthErkc4E5r758Uc3X7hLEyB9S83iWc5ZjcW1C9M3',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7"),
        symbol: 'NOS',
        name: 'Nosana',
        logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/nosXBVoaCTtYdLvKY6Csb4AC8JCdQKKAaWYtx2ZMoo7/logo.png',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("mb1eu7TzEc71KxDpsmsKoucSSuuoGLv1drys1oP2jh6"),
        symbol: 'MOBILE',
        name: 'Helium Mobile',
        logo: 'https://shdw-drive.genesysgo.net/CsDkETHRRR1EcueeN346MJoqzymkkr7RFjMqGpZMzAib/mobile.png',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("SNApmcWQqj3Ny2YFkQmkELQnNgaXRu6KmnYSPiFZcLn"),
        symbol: 'SNAP',
        name: 'SolSnap',
        logo: 'https://bafkreibzsiecgo2477x6fnfe24xt2bxzko35m43beexfnqvlqd4e4hgcqu.ipfs.nftstorage.link/',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("HLptm5e6rTgh4EKgDpYFrnRHbjpkMyVdEeREEa2G7rf9"),
        symbol: 'DUKO',
        name: 'Duko',
        logo: 'https://bafkreicncfoowhhwrvtkajpivg6lbi5qsktrsfhs3x264k4kgdil5hv26q.ipfs.nftstorage.link/',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("947tEoG318GUmyjVYhraNRvWpMX7fpBTDQFBoJvSkSG3"),
        symbol: 'CHAT',
        name: 'Solchat',
        logo: 'https://bafybeigqw6dl5tiexa7utfhcsgldalhrelvjnea23jckqsgo65i2uoln5i.ipfs.nftstorage.link',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R"),
        symbol: 'RAY',
        name: 'Raydium',
        logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("bobaM3u8QmqZhY1HwAtnvze9DLXvkgKYk3td3t8MLva"),
        symbol: 'BOBAOPPA',
        name: 'Boba Oppa',
        logo: 'https://bafkreicrn3j6ausiwrw66jg22xxbrkypcgkjkux6xeaacw2wcxtj6t3lji.ipfs.nftstorage.link/',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("A3eME5CetyZPBoWbRUwY3tSe25S6tb18ba9ZPbWk9eFJ"),
        symbol: 'PENG',
        name: 'Peng',
        logo: 'https://bafkreibmv7tbmuqqhm2foemzuy4o4bxqd677r3obw6igrtlmpe5k3j4oge.ipfs.nftstorage.link',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("SHDWyBxihqiCj6YekG2GUr7wqKLeLAMK1gHZck9pL6y"),
        symbol: 'SHDW',
        name: 'Shadow Token',
        logo: 'https://shdw-drive.genesysgo.net/FDcC9gn12fFkSU2KuQYH4TUjihrZxiTodFRWNF4ns9Kt/250x250_with_padding.png',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("BykkD9369RvXuEDbR7pTRz49b7cfLRTzHgSVoqK8gc15"),
        symbol: 'WCC',
        name: 'White Coffee Cat',
        logo: 'https://bafybeigm6bjva5igzsz56xb24gbiq3ynu5l2tuxnkbi437hplbw3fu5vxq.ipfs.cf-ipfs.com',
        balance: 0,
        uiAmount: 0,
        decimals: 6
      }
      ,
      {
        mint: new PublicKey("3bRTivrVsitbmCTGtqwp7hxXPsybkjn4XLNtPsHqa3zR"),
        symbol: 'LIKE',
        name: 'Only1 (LIKE)',
        logo: 'https://only1.io/like-token.svg',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      {
        mint: new PublicKey("rndrizKT3MK1iimdxRdWabcF7Zg7AR5T4nud4EkHBof"),
        symbol: 'RENDER',
        name: 'Render Token',
        logo: 'https://shdw-drive.genesysgo.net/5zseP54TGrcz9C8HdjZwJJsZ6f3VbP11p1abwKWGykZH/rndr.png',
        balance: 0,
        uiAmount: 0,
        decimals: 8
      }
      ,
      {
        mint: new PublicKey("3TWgDvYBL2YPET2LxnWAwsMeoA8aL4DutNuwat2pKCjC"),
        symbol: 'KHAI',
        name: 'Kitten Haimer',
        logo: 'https://bafkreihkv72pvkaaboxl5rc7g7r5jihqjycdy4cbrap25ilfvvlgefhca4.ipfs.nftstorage.link',
        balance: 0,
        uiAmount: 0,
        decimals: 8
      }
      ,
      {
        mint: new PublicKey("Fch1oixTPri8zxBnmdCEADoJW2toyFHxqDZacQkwdvSP"),
        symbol: 'HARAMBE',
        name: 'HARAMBE',
        logo: 'https://turquoise-worried-llama-208.mypinata.cloud/ipfs/QmSsf1AHHx56hyR66DrfvohdQ9mwNrXcZc3WYZb3xi9Tfs?pinataGatewayToken=IjmxGjT2wDVCW9f1Vtqqu4mFAuFmeTtF2KuGOPOUmuNDv0IzHYWPG90almZJn1qp',
        balance: 0,
        uiAmount: 0,
        decimals: 9
      }
      ,
      // {
      //   mint: new PublicKey("Comp4ssDzXcLeu2MnLuGNNFC4cmLPMng8qWHPvzAMU1h"),
      //   symbol: 'compassSOL',
      //   name: 'Compass SOL',
      //   logo: 'https://solanacompass.com/compass.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc"),
      //   symbol: 'CHEEMS',
      //   name: 'Cheems',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3FoUAsGDbvTD6YZ4wVKJgTB76onJUKz7GPEBNiR5b8wc/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("BonK1YhkXEGLZzwtcvRTip3gAL9nCeQD7ppZBLXhtTs"),
      //   symbol: 'bonkSOL',
      //   name: 'Bonk SOL',
      //   logo: 'https://arweave.net/ms-FdIyJ8TxEJOb2SAYhfyrLop7TDrCEjD-I-oIl5u4',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5z3EqYQo9HiCEs3R84RCDMu2n7anpDMxRhdK8PSWmrRC"),
      //   symbol: 'PONKE',
      //   name: 'PONKE',
      //   logo: 'https://i.imgur.com/qgEcBin.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HaP8r3ksG76PhQLTqR8FYBeNiQpejcFbQmiHbg787Ut1"),
      //   symbol: 'TRUMP',
      //   name: 'MAGA (Wormhole)',
      //   logo: 'https://magamemecoin.com/wp-content/uploads/cropped-MAGA-Memecoin-Favicon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("EVDQN4P1YTTD1Y3eLBDBoALWnR4aMBC9y2xUYCrbGbuy"),
      //   symbol: 'MOCHICAT',
      //   name: 'MOCHICAT',
      //   logo: 'https://bafkreics2dftf4c72rk5kwc6eupuxvjv6b3tt2gpsg4ovmbyby7ctirsom.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DLUNTKRQt7CrpqSX1naHUYoBznJ9pvMP65uCeWQgYnRK"),
      //   symbol: 'SOLC',
      //   name: 'SolCard',
      //   logo: 'https://bafybeidyzyh3wmstgqsdyhbz4a2im4dx3qw6sveet2tvd2vch62vonnb2y.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("hntyVP6YFm1Hg25TN9WGLqM12b8TQmcknKrdu1oxWux"),
      //   symbol: 'HNT',
      //   name: 'Helium Network Token',
      //   logo: 'https://shdw-drive.genesysgo.net/CsDkETHRRR1EcueeN346MJoqzymkkr7RFjMqGpZMzAib/hnt.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("Eyhi3qZCW1hNgsLtv1geaeDgZJmRFCpEtbjABWfGcGx5"),
      //   symbol: 'GPT',
      //   name: 'SolGPT',
      //   logo: 'https://cf-ipfs.com/ipfs/QmbzeT99i7YNMAXbjKbHq6zEuiPgEj7GwDvX5ZAz9cDYCo',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("AVLhahDcDQ4m4vHM4ug63oh7xc8Jtk49Dm5hoe9Sazqr"),
      //   symbol: 'SOLAMA',
      //   name: 'Solama',
      //   logo: 'https://gateway.irys.xyz/UoPHSd2rbj9krhwHfR4Vk94JnzgwbDs8SW92_Z90YUM',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4icEZCrEYNop2ZaMMCkRHaNzkt6xG9BpijMCQV7mpw6Z"),
      //   symbol: 'ROCKY',
      //   name: 'Rocky',
      //   logo: 'https://i.ibb.co/X8r9531/rockylogo-transparents.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9cX8hMxZ2vW7pxYEPf2G5UHrcmMx83iTgGcxwwRKdarq"),
      //   symbol: '$POINTS',
      //   name: '$POINTS',
      //   logo: 'https://bafkreia7w7auilyxmky3ajrozqsdgexi42kakax3iueinz4asyyfumilky.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BoZoQQRAmYkr5iJhqo7DChAs7DPDwEZ5cv1vkYC9yzJG"),
      //   symbol: '$BOZO',
      //   name: 'BOZO',
      //   logo: 'https://arweave.net/QN7RFzy_OqPO_cAbBtBUzcUwObkDuvkRLS16oxJI-s0',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("CsxCtA8usvWKdRhe7KhLU5GgwzYaLkoHsz1MKBVZ4W3M"),
      //   symbol: 'WINR',
      //   name: 'WINR (Wormhole)',
      //   logo: 'https://jbassets.fra1.cdn.digitaloceanspaces.com/winr-logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx"),
      //   symbol: 'ATLAS',
      //   name: 'Star Atlas',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ATLASXmbPQxBUYbxPsV97usA3fPQYEqzQBUHgiFCUsXx/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("8iSagwHZNj4Hx4CMeoZwLLMVbWt4mUT6qk42TxiHkRtn"),
      //   symbol: 'DGNA',
      //   name: 'DegenAlley',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8iSagwHZNj4Hx4CMeoZwLLMVbWt4mUT6qk42TxiHkRtn/DGNA.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("3de2yRhtD4VbJBb8EQAQffYMPLU4EnSHT1eveBwiL3tn"),
      //   symbol: 'LOAF',
      //   name: 'LOAF CAT',
      //   logo: 'https://loaf.cat/img/LOAFLOGO.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FwEHs3kJEdMa2qZHv7SgzCiFXUQPEycEXksfBkwmS8gj"),
      //   symbol: 'aaUSDT',
      //   name: 'Wrapped USDT (Allbridge from Avalanche)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2uRFEWRBQLEKpLmF8mohFZGDcFQmrkQEEZmHQvMUBvY7"),
      //   symbol: 'SLB',
      //   name: 'Solberg',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2uRFEWRBQLEKpLmF8mohFZGDcFQmrkQEEZmHQvMUBvY7/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("7atgF8KQo4wJrD5ATGX7t1V2zVvykPJbFfNeVf1icFv1"),
      //   symbol: '$CWIF',
      //   name: 'catwifhat',
      //   logo: 'https://i.postimg.cc/d1QD417z/200x200logo-copy.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("JET6zMJWkCN9tpRT2v2jfAmm5VnQFDpUBCyaKojmGtz"),
      //   symbol: 'JET',
      //   name: 'Jet Protocol',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/JET6zMJWkCN9tpRT2v2jfAmm5VnQFDpUBCyaKojmGtz/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Dso1bDeDjCQxTrWHqUUi63oBvV7Mdm6WaobLbQ7gnPQ"),
      //   symbol: 'dSOL',
      //   name: 'Drift Staked SOL',
      //   logo: 'https://drift-public.s3.eu-central-1.amazonaws.com/dSOL.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K"),
      //   symbol: 'soALEPH',
      //   name: 'Wrapped ALEPH (Sollet)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CsZ5LZkDS7h9TDKjrbL7VAwQZ9nsRu8vJLhRYfmGaN8K/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("5LafQUrVco6o7KMz42eqVEJ9LW31StPyGjeeu5sKoMtA"),
      //   symbol: 'MUMU',
      //   name: 'Mumu the Bull',
      //   logo: 'https://bafkreihszutctvdmdlyjtzfmj7rgvdorpc7jchj2td3feypc7veidbkpsu.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7dgHoN8wBZCc5wbnQ2C47TDnBMAxG4Q5L3KjP67z8kNi"),
      //   symbol: 'MANA',
      //   name: 'Decentraland (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/MANA_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("A6YRaK4toMe2qZY7KLNCugXBrsjCG4fAjAR8uZUBeUek"),
      //   symbol: 'GIANT',
      //   name: 'AndreDefiant',
      //   logo: 'https://arweave.net/NyVAfC6oeDsD4USdwHQuEv9Q-i5jSK2SHksF6FwN-us',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CPjDhhBpwEsLygNuczKcNwBPgMeni1xLomD48x51MyYU"),
      //   symbol: 'BENJI',
      //   name: "Taylor Swift's Cat",
      //   logo: 'https://bafkreidr7yjxj75ollxohlgmrvix6dpwgy4y5r3wp2bzz6mrgi3tnuhkuy.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("66edZnAPEJSxnAK4SckuupssXpbu5doV57FUcghaqPsY"),
      //   symbol: 'PRGC',
      //   name: 'ProtoReality Games Token',
      //   logo: 'https://www.protorealitygames.com/images/PRGC_Token.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Dwri1iuy5pDFf2u2GwwsH2MxjR6dATyDv9En9Jk8Fkof"),
      //   symbol: '2080',
      //   name: '2080',
      //   logo: 'https://raw.githubusercontent.com/resources-pub/token-info/main/fidelion_logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FvER7SsvY5GqAMawf7Qfb5MnUUmDdbPNPg4nCa4zHoLw"),
      //   symbol: 'PAJAMAS',
      //   name: 'The First Youtube Cat',
      //   logo: 'https://pajamas.cat/wp-content/uploads/2024/03/photo_6303196121761170014_x.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("dab15vg2k8zGJPy4xM2DH2G2BY3khrqduXapzYAV3y8"),
      //   symbol: 'DABLNS',
      //   name: 'DABLOONS',
      //   logo: 'https://arweave.net/AYbNmLsPhYrlgrVtCERbp7UysLGL-IXQQrTL826ai6Y',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("8wXtPeU6557ETkp9WHFY1n1EcU6NxDvbAggHGsMYiHsB"),
      //   symbol: 'GME',
      //   name: 'GameStop',
      //   logo: 'https://nftstorage.link/ipfs/bafybeiddrzeyne4n2hi7qkhyhqorc4jbs4565pset7fc3ifwvhvxfdrt7q/gamestop-logo.jpeg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AZsHEMXd36Bj1EMNXhowJajpUXzrKcK57wW4ZGXVa7yR"),
      //   symbol: 'GUAC',
      //   name: 'Guacamole',
      //   logo: 'https://shdw-drive.genesysgo.net/36JhGq9Aa1hBK6aDYM4NyFjR5Waiu9oHrb44j1j8edUt/image.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX"),
      //   symbol: 'USDH',
      //   name: 'USDH Hubble Stablecoin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/USDH1SM1ojwWUga67PGrgFWUHibbjqMvuMaDkRJTgkX/usdh.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DtgDZb83TqywcuBuWE89jx4k5Y7b6nQ4GYJq3Wd61JQQ"),
      //   symbol: 'rogen',
      //   name: 'jeo rogen',
      //   logo: 'https://cf-ipfs.com/ipfs/QmZ5WeZCweWhbKbJ7Ux1ewxVVMrwz5dYL6szeBdT59f4AF',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("rvxo8t7TKeSmAgpdqK1CY9ddZi3NyowRCh1m2d7KrUc"),
      //   symbol: 'SMRAI',
      //   name: 'SMRAI',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/rvxo8t7TKeSmAgpdqK1CY9ddZi3NyowRCh1m2d7KrUc/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ALKiRVrfLgzeAV2mCT7cJHKg3ZoPvsCRSV7VCRWnE8zQ"),
      //   symbol: 'NEKI',
      //   name: 'Maneki-neko',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ALKiRVrfLgzeAV2mCT7cJHKg3ZoPvsCRSV7VCRWnE8zQ/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3DHPqxdMXogNNnpqBMF8N4Zs4dn1WR31H7UjWq6FExwG"),
      //   symbol: 'DAWG',
      //   name: 'DAWG',
      //   logo: 'https://user-images.githubusercontent.com/15795037/143055147-72513c02-be9b-4639-bb30-3c1c037cb030.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("WNZzxM1WqWFH8DpDZSqr6EoHKWXeMx9NLLd2R5RzGPA"),
      //   symbol: '$WNZ',
      //   name: 'Winerz',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/WNZzxM1WqWFH8DpDZSqr6EoHKWXeMx9NLLd2R5RzGPA/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("DDti34vnkrCehR8fih6dTGpPuc3w8tL4XQ4QLQhc3xPa"),
      //   symbol: 'LSD',
      //   name: 'Liquid Solana Derivative 42069',
      //   logo: 'https://arweave.net/b4cfT3yHTxVvuZc2jzmgzWUiEBiuAC9hkM7GhXZEklg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CzLWmvjtj5bp9YEWkzzBnuWovVtogeuchFu5GeFh68hB"),
      //   symbol: 'Puri',
      //   name: 'Puri',
      //   logo: 'https://gateway.irys.xyz/ILXdxJTexpeuGPKMjPtP4wBmvg4x3GlI3nc0n4V9RIU',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AD27ov5fVU2XzwsbvnFvb1JpCBaCB5dRXrczV9CqSVGb"),
      //   symbol: 'REAL',
      //   name: 'Realy Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AD27ov5fVU2XzwsbvnFvb1JpCBaCB5dRXrczV9CqSVGb/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DSXWF79VQ3RzFBB67WeNfCzfzAQq5X6m97zi85bq1TRx"),
      //   symbol: 'WHALES',
      //   name: 'Catalina Whale Mixer Floor Index',
      //   logo: 'https://bafkreicadecx3rbffm6tqtgtc67bi6r2xiibtmawcejje7pfu7id2zxwwy.ipfs.dweb.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("9V4x6ikFm9XKsnh3TiYJWPwQfFkJZDjifu7VSUqg3es1"),
      //   symbol: 'Badger',
      //   name: 'Badger',
      //   logo: 'https://bafybeid32j2uhizizt77t5au2xekwprplqn2k4thirubwkrvnb2cgadije.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5L2YboFbHAUpBDDJjvDB5M6pu9CW2FRjyDB2asZyvjtE"),
      //   symbol: 'PIXL',
      //   name: 'Pixels.so Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5L2YboFbHAUpBDDJjvDB5M6pu9CW2FRjyDB2asZyvjtE/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("3zE4Qmh9hrC4inHynT3aSRzHcWhnxPCHLeN9WWqvoRVz"),
      //   symbol: 'RRR',
      //   name: 'Race Raiders Rewards',
      //   logo: 'https://arweave.net/SH106hrChudKjQ_c6e6yd0tsGUbFIScv2LL6Dp-LDiI',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("LFG1ezantSY2LPX8jRz2qa31pPEhpwN9msFDzZw4T9Q"),
      //   symbol: 'LFG',
      //   name: 'LessFnGas',
      //   logo: 'https://mogos7pjgqvbf3z7kzixpv67uxngkrifdfoddttz2tu6ywphk33q.arweave.net/Y4zpfek0KhLvP1ZRd9ffpdplRQUZXDHOedTp7FnnVvc?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("EzfnjRUKtc5vweE1GCLdHV4MkDQ3ebSpQXLobSKgQ9RB"),
      //   symbol: 'CSM',
      //   name: 'Cricket Star Manager',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EzfnjRUKtc5vweE1GCLdHV4MkDQ3ebSpQXLobSKgQ9RB/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("sin1uRe1cMCWR7VPLdZrGrvKs8UvKMsGzhvpJLg4Ld9"),
      //   symbol: 'SIN',
      //   name: 'sinDAO',
      //   logo: 'https://nftstorage.link/ipfs/bafkreibne6m5rh42mgvud2womqc2zordzqvki5w4c2yasa76klz7dzwuve',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("yomFPUqz1wJwYSfD5tZJUtS3bNb8xs8mx9XzBv8RL39"),
      //   symbol: 'YOM',
      //   name: 'YOM',
      //   logo: 'https://yom.mypinata.cloud/ipfs/QmQ9qE5XWMEyzQGWJFcZjwjigHBzSWDaaf2xFhCFqdvUcx',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("LSTxxxnJzKDFSLr4dUkPcmCf5VyryEqzPLz5j4bpxFp"),
      //   symbol: 'LST',
      //   name: 'Liquid Staking Token',
      //   logo: 'https://storage.googleapis.com/static-marginfi/lst.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("A3t817aK6XkhqQA148bjXKWJMhBmP9t2d9caWvQNaHQR"),
      //   symbol: 'CHURRO',
      //   name: 'CHURRO',
      //   logo: 'https://bafybeicdl3dbn5cr4xwvov5jnuxusaeichgfyyxnpmmukdsv7xw44qfpxi.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("HWxpSV3QAGzLQzGAtvhSYAEr7sTQugQygnni1gnUGh1D"),
      //   symbol: 'xBTC',
      //   name: 'Synthetic BTC',
      //   logo: 'https://www.synthetify.io/icons/xbtc.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 10
      // }
      // ,
      // {
      //   mint: new PublicKey("AGkFkKgXUEP7ZXazza5a25bSKbz5dDpgafPhqywuQnpf"),
      //   symbol: 'SSU',
      //   name: 'SunnySideUp Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AGkFkKgXUEP7ZXazza5a25bSKbz5dDpgafPhqywuQnpf/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AkhdZGVbJXPuQZ53u2LrimCjkRP6ZyxG1SoM85T98eE1"),
      //   symbol: 'BOT',
      //   name: 'Starbots Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AkhdZGVbJXPuQZ53u2LrimCjkRP6ZyxG1SoM85T98eE1/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("6fdCC8xfrXNy6PmNaVcxdEY5XNCTAha2V54zYYnmBCey"),
      //   symbol: 'KOI',
      //   name: 'KOI',
      //   logo: 'https://bafybeienmtuhyl7nhi47psrnap7glxyx4wgo462man4l3nyfrgs5lavsae.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GEYrotdkRitGUK5UMv3aMttEhVAZLhRJMcG82zKYsaWB"),
      //   symbol: 'POTATO',
      //   name: 'POTATO',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GEYrotdkRitGUK5UMv3aMttEhVAZLhRJMcG82zKYsaWB/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("4riQPy1yXQ2d1FfzgLy9eJy6yoUdZuQkMj7JsVKr4bGu"),
      //   symbol: 'LOST',
      //   name: 'Lost',
      //   logo: 'https://bafybeigqh27u3ug2pui56t3h6bhu7pkojozoqzwamnnj7rdix5avtujse4.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("GV6n9Uow3XzMWSs8vwTCML8SvMA6ozbidaEfdPoSoraQ"),
      //   symbol: 'SVIZ',
      //   name: 'Space Vizsla',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GV6n9Uow3XzMWSs8vwTCML8SvMA6ozbidaEfdPoSoraQ/VizslaMoonLogo100x100.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2Kc38rfQ49DFaKHQaWbijkE7fcymUMLY5guUiUsDmFfn"),
      //   symbol: 'KURO',
      //   name: 'Kurobi',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2Kc38rfQ49DFaKHQaWbijkE7fcymUMLY5guUiUsDmFfn/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk"),
      //   symbol: 'soETH',
      //   name: 'Wrapped Ethereum (Sollet)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2FPyTwcZLUg1MDrwsyoP4D6s1tM7hAkHYRjkNb5w6Pxk/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DNhZkUaxHXYvpxZ7LNnHtss8sQgdAfd1ZYS1fB7LKWUZ"),
      //   symbol: 'apUSDT',
      //   name: 'Wrapped USDT (Allbridge from Polygon)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9noXzpXnkyEcKF3AeXqUHTdR59V5uvrRBUZ9bwfQwxeq"),
      //   symbol: 'KING',
      //   name: 'KING',
      //   logo: 'https://i.imgur.com/IQ4rEmD.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ELuv4btje7nZNLeMSw7foptfSiRzEXpNxYuet8cM27SN"),
      //   symbol: '$MARVIN',
      //   name: 'MARVIN',
      //   logo: 'https://bafkreid3syczq66zhpvdmrvktpw2aksmgk2maol2bt3i2zghwjhisvqnfe.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("6Y7LbYB3tfGBG6CSkyssoxdtHb77AEMTRVXe8JUJRwZ7"),
      //   symbol: 'DINO',
      //   name: 'DINO',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6Y7LbYB3tfGBG6CSkyssoxdtHb77AEMTRVXe8JUJRwZ7/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("3jzdrXXKxwkBk82u2eCWASZLCKoZs1LQTg87HBEAmBJw"),
      //   symbol: 'FLOOF',
      //   name: 'FLOOF',
      //   logo: 'https://raw.githubusercontent.com/GreenFailure/Floof/main/OkyT9kpz_400x400.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 1
      // }
      // ,
      // {
      //   mint: new PublicKey("BvEj2MNMPsUrD4vSk7NHs4TtRcCcJd75Wx5HvVbY4rbK"),
      //   symbol: 'DEDS',
      //   name: 'Decimus Dynamics Token',
      //   logo: 'https://github.com/DecimusDynamics/assets/blob/main/decimus-icon-1x1-black.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FLrgwxXaX8q8ECF18weDf3PLAYorXST5orpY34d8jfbm"),
      //   symbol: 'CHINU',
      //   name: 'Chinu',
      //   logo: 'https://chinu.vip/wp-content/uploads/2024/01/chinuHeadLogo100.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("H7ed7UgcLp3ax4X1CQ5WuWDn6d1pprfMMYiv5ejwLWWU"),
      //   symbol: 'CHONKY',
      //   name: 'CHONKY',
      //   logo: 'https://f4xsxwnaxid37ojcze5qpc7p3ydfaj5dhynszhcjseeizelsa4mq.arweave.net/Ly8r2aC6B7-5Isk7B4vv3gZQJ6M-GyycSZEIjJFyBxk',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("E6UU5M1z4CvSAAF99d9wRoXsasWMEXsvHrz3JQRXtm2X"),
      //   symbol: 'DGLN',
      //   name: 'Dogelana',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/E6UU5M1z4CvSAAF99d9wRoXsasWMEXsvHrz3JQRXtm2X/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4Yz5zByTwnVe46AXD6hsrccbq4TKLyih2xRqPyLBDT1P"),
      //   symbol: 'DONALD',
      //   name: 'DONALD',
      //   logo: 'https://gateway.irys.xyz/LQ9YCmIWoXtDUAxNQhPjpbGbTgLjkgnLFVQJfRn73o0',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("88881Hu2jGMfCs9tMu5Rr7Ah7WBNBuXqde4nR5ZmKYYy"),
      //   symbol: 'sUSDC-8',
      //   name: 'Saber Wrapped USD Coin (8 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/88881Hu2jGMfCs9tMu5Rr7Ah7WBNBuXqde4nR5ZmKYYy/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("H7Qc9APCWWGDVxGD5fJHmLTmdEgT9GFatAKFNg6sHh8A"),
      //   symbol: 'OOGI',
      //   name: 'OOGI',
      //   logo: 'https://oogi.com/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8upjSpvjcdpuzhfR1zriwg5NXkwDruejqNE9WNbPRtyA"),
      //   symbol: 'GRAPE',
      //   name: 'Grape',
      //   logo: 'https://lh3.googleusercontent.com/y7Wsemw9UVBc9dtjtRfVilnS1cgpDt356PPAjne5NvMXIwWz9_x7WKMPH99teyv8vXDmpZinsJdgiFQ16_OAda1dNcsUxlpw9DyMkUk=s0',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("iotEVVZLEywoTn1QdwNPddxPWszn3zFhEot3MfL9fns"),
      //   symbol: 'IOT',
      //   name: 'Helium IOT',
      //   logo: 'https://shdw-drive.genesysgo.net/CsDkETHRRR1EcueeN346MJoqzymkkr7RFjMqGpZMzAib/iot.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FyNuYGBBry5LAtPEkh8Y73izjTUNT2td2J3sGCK7E9Ju"),
      //   symbol: 'VIBEZ',
      //   name: 'VIBEZ',
      //   logo: 'https://github.com/ArthurPaivaT/token-list/blob/main/assets/mainnet/FyNuYGBBry5LAtPEkh8Y73izjTUNT2td2J3sGCK7E9Ju/logo.png?raw=true',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa"),
      //   symbol: 'NIRV',
      //   name: 'NIRV',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/NRVwhjBQiUPYtfDT5zRBVJajzFQHaBUNtC7SNVvqRFa/NIRV.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("5veVHPNDsmSxDW4Abpb368wLHpo32LP3fqhfJHnkSSwo"),
      //   symbol: 'PHAUNTEM',
      //   name: 'Phauntem',
      //   logo: 'https://rose-imperial-bug-423.mypinata.cloud/ipfs/Qmby3HKMXxR6Gx4qQJuy8BVyvw93jnZhQu3NV6wQk7x4QR',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BqVHWpwUDgMik5gbTciFfozadpE2oZth5bxCDrgbDt52"),
      //   symbol: 'OPOS',
      //   name: 'Only Possible On Solana',
      //   logo: 'https://arweave.net/k8uU2yLoYwL4zTBZ-TO-7bs6hgtLNaHhzP4FLUMuaS0',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2adqrK24G2iu2mmEijzKPKg69DUwGk3fUWAQx7Y1kSSK"),
      //   symbol: 'BOTMAN',
      //   name: 'botman',
      //   logo: 'https://thebotman.xyz/images/botman_pfp.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("3f7wfg9yHLtGKvy75MmqsVT1ueTFoqyySQbusrX1YAQ4"),
      //   symbol: 'PbP',
      //   name: 'Pixel By Pixel',
      //   logo: 'https://www.arweave.net/oM5esNEOkJrw6rElkNeg8I_ayWnf_ScNC8P9cgqNsms',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HJbNXx2YMRxgfUJ6K4qeWtjatMK5KYQT1QnsCdDWywNv"),
      //   symbol: 'ATS',
      //   name: 'Atlas Dex',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HJbNXx2YMRxgfUJ6K4qeWtjatMK5KYQT1QnsCdDWywNv/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("G3vWvAaXPHCnncnyAbq6yBRXqfRtEV3h7vExzasZeT6g"),
      //   symbol: 'CIF',
      //   name: 'CATWIFHAT',
      //   logo: 'https://i.postimg.cc/hGBgdxxj/Cif200x200.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2x8o3hA5S5fBxCSE9hzVTf3RohcMWHqkDNKNEPuzprD5"),
      //   symbol: 'STBOT',
      //   name: 'SolTradingBot',
      //   logo: 'https://yzevocek3mrl6hm2lz4m4nhskyu4knc4d5xissdmnss7wkecrodq.arweave.net/xklXCIrbIr8dml54zjTyVinFNFwfbolIbGyl-yiCi4c',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW"),
      //   symbol: 'STARS',
      //   name: 'StarLaunch',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HCgybxq5Upy8Mccihrp7EsmwwFqYZtrHrsmsKwtGXLgW/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("xABfKiG2KCHi6keTeLycW1iK7B52wJmchSWXu3YrsDp"),
      //   symbol: 'DONK',
      //   name: 'DONK',
      //   logo: 'https://arweave.net/yu68b5mpxYjDqL990DEL9b_ri9E8TX-o27E1PS9W6II',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("tooLsNYLiVqzg8o4m3L2Uetbn62mvMWRqkog6PQeYKL"),
      //   symbol: 'TOOL',
      //   name: 'Toolkit',
      //   logo: 'https://storage.googleapis.com/nft-assets/items/TOOL.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("4mJ6N65rD9w6sFPQ17UDWot2H64UtzR31biVLaKpZT6J"),
      //   symbol: 'ALIEN',
      //   name: 'AlienUniverse Token',
      //   logo: 'https://raw.githubusercontent.com/alien-universe/assets/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("ATRLuHph8dxnPny4WSNW7fxkhbeivBrtWbY6BfB4xpLj"),
      //   symbol: 'ATR',
      //   name: 'Artrade Token',
      //   logo: 'https://artrade.app/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DhTNFBp4NjaxWqf6LwG57GrJQZfXrso1qK9FcMZt9sv7"),
      //   symbol: 'ROCKY',
      //   name: 'Rocky',
      //   logo: 'https://imageupload.io/ib/B1wtisSaYlCUmwy_1700434086.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv"),
      //   symbol: 'sBTC-8',
      //   name: 'Saber Wrapped Bitcoin (Sollet) (8 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SBTCB6pWqeDo6zGi9WVRMLCsKsN6JiR1RMUqvLtgSRv/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("2TxM6S3ZozrBHZGHEPh9CtM74a9SVXbr7NQ7UxkRvQij"),
      //   symbol: 'DINOEGG',
      //   name: 'DINOEGG',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2TxM6S3ZozrBHZGHEPh9CtM74a9SVXbr7NQ7UxkRvQij/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("99ouK5YUK3JPGCPX9joNtHsMU7NPpU7w91JN4kdQ97po"),
      //   symbol: 'AI',
      //   name: 'AI',
      //   logo: 'https://gateway.irys.xyz/HnDwG54RZvJhTD2PX-mmrD2jwC9MIdxKjW2hL3M8jQc',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Aymdf5Fp2URJNcsHpEF2NqEqFHiqvvhrDvYQtyZFw7zn"),
      //   symbol: 'WTRBR',
      //   name: 'Water Bears',
      //   logo: 'https://arweave.net/GZNQl83S1kK5kvak1yvMrI8muuPVm80fdliPcgwsWfw',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("KgV1GvrHQmRBY8sHQQeUKwTm2r2h8t4C8qt12Cw1HVE"),
      //   symbol: 'AVAX',
      //   name: 'AVAX (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/AVAX_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("SUNNYWgPQmFxe9wTZzNK7iPnJ3vYDrkgnxJRJm1s3ag"),
      //   symbol: 'SUNNY',
      //   name: 'Sunny Governance Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SUNNYWgPQmFxe9wTZzNK7iPnJ3vYDrkgnxJRJm1s3ag/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2cZv8HrgcWSvC6n1uEiS48cEQGb1d3fiowP2rpa4wBL9"),
      //   symbol: 'ACF',
      //   name: 'ACF Game',
      //   logo: 'https://shop.alienchickenfarm.com/logos/acf-token.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("CAPYD6Lrm7bTZ6C7t7JvSxvpEcfKQ9YNB7kUjh6p6XBN"),
      //   symbol: 'CAPY',
      //   name: 'Capybara',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CAPYD6Lrm7bTZ6C7t7JvSxvpEcfKQ9YNB7kUjh6p6XBN/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DjPt6xxMoZx1DyyWUHGs4mwqWWX48Fwf6ZJgqv2F9qwc"),
      //   symbol: 'VOID',
      //   name: 'VOID Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DjPt6xxMoZx1DyyWUHGs4mwqWWX48Fwf6ZJgqv2F9qwc/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Dx1Lq5FjangW5ifRMEogAiakm24LyB5AoHmQifepvNjV"),
      //   symbol: 'BabyBonk',
      //   name: 'Baby Bonk',
      //   logo: 'https://babybonk.pro/img/bonk-1.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CKfatsPMUf8SkiURsDXs7eK6GWb4Jsd6UDbs7twMCWxo"),
      //   symbol: 'BERN',
      //   name: 'BonkEarn',
      //   logo: 'https://i.imgur.com/nd9AVZ4.jpeg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("FdGoS1Dok5CLnS8fVSmj5A92uY1yhzdTC2ZxuLJdkwgs"),
      //   symbol: 'SPOOKY',
      //   name: 'Spooky The Phantom',
      //   logo: 'https://i.ibb.co/mHzqCPP/Spooky-logo-rounded-100px.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8EDaoeBqpcVACwvkYXh1vAcU29HiBiNhqoF4pRsuUsZS"),
      //   symbol: 'sSOL',
      //   name: 'SunnySideUp staked SOL (sSOL)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8EDaoeBqpcVACwvkYXh1vAcU29HiBiNhqoF4pRsuUsZS/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq"),
      //   symbol: 'FOXY',
      //   name: 'Famous Fox Federation',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FoXyMu5xwXre7zEoSvzViRk3nGawHUp9kUh97y2NDhcq/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("METAmTMXwdb8gYzyCPfXXFmZZw4rUsXX58PNsDg7zjL"),
      //   symbol: 'SLC',
      //   name: 'Solice',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/METAmTMXwdb8gYzyCPfXXFmZZw4rUsXX58PNsDg7zjL/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4jE4VuqFWZfmSXjTDD5KUoN2qkVu96nPTPj4mhs5PA1W"),
      //   symbol: 'YOLO',
      //   name: 'YoloNolo Coin',
      //   logo: 'https://nftstorage.link/ipfs/bafybeiepttutbes4mzojtmlvx3iqgwvs673czt5g7k7uoficx4vmjunmie/YOLO LOGO.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("CmSryDa4mnDYUicq7qSESsTKAdgBP26jSYcg8zavVoJd"),
      //   symbol: 'GM',
      //   name: 'GM Solana',
      //   logo: 'https://cdn.jsdelivr.net/gh/brendanhernou/gm/GMSolana.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("H1G6sZ1WDoMmMCFqBKAbg9gkQPCo1sKQtaJWz9dHmqZr"),
      //   symbol: 'SBONK',
      //   name: 'SHIBONK',
      //   logo: 'https://raw.githubusercontent.com/Sperlo64/SHIBONK/main/bonklogo2.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Ak3ovnWQnAxPSFoSNCoNYJLnJtQDCKRBH4HwhWkb6hFm"),
      //   symbol: 'CDT',
      //   name: 'CheckDot',
      //   logo: 'https://arweave.net/0qQ9rLiXpfs3G2bcilHsDTYOtHXExocm1VBjV3BvypY',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("32gaR4rn9JyzoDVwMzZ5j3NgcHc5RQhMSJby55FFKnq3"),
      //   symbol: 'RIBBET',
      //   name: 'RIBBET',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/32gaR4rn9JyzoDVwMzZ5j3NgcHc5RQhMSJby55FFKnq3/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6"),
      //   symbol: 'HBB',
      //   name: 'Hubble Protocol Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HBB111SCo9jkCejsZfz8Ec8nH7T6THF8KEKSnvwT6XK6/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9Ttyez3xiruyj6cqaR495hbBkJU6SUWdV6AmQ9MvbyyS"),
      //   symbol: 'smole',
      //   name: 'smolecoin',
      //   logo: 'https://ipfs.io/ipfs/QmcXAf2KasPyu8UtLnafsj3MR3YSjPH4huRc4NQ8YSanoX',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2zjmVX4KDWtNWQyJhbNXgpMmsAoXwftB7sGV4qvV18xa"),
      //   symbol: 'EGO',
      //   name: 'Shear Ego Coin',
      //   logo: 'https://raw.githubusercontent.com/jcards26/sol/main/new-new.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CALusHembJf3tQ69BxFbLRUSpGRwKzEnLKWUPhQo5dFk"),
      //   symbol: 'calUSD',
      //   name: 'calUSD Stablecoin',
      //   logo: 'https://user-images.githubusercontent.com/8619106/167318344-e9ea9147-8969-4818-877c-5c75de10aecc.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6Dujewcxn1qCd6rcj448SXQL9YYqTcqZCNQdCn3xJAKS"),
      //   symbol: 'ARTE',
      //   name: 'ARTE',
      //   logo: 'https://raw.githubusercontent.com/ArtPunks/ARTE-token/main/assets/token_512.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4G86CMxGsMdLETrYnavMFKPhQzKTvDBYGMRAdVtr72nu"),
      //   symbol: '$NAP',
      //   name: 'SNAP',
      //   logo: 'https://image-cdn.solana.fm/images/?imageUrl=https://bafkreibmmrxk72fmcp3pxcrusm5hot44mwawyfhny4tp2jwc2sgjtjfa2y.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GtLBsmS6Z4FC9gmnCFS2ZzCKmb9vYL3kELnjVmxHurnh"),
      //   symbol: 'ENG',
      //   name: 'ENG Token',
      //   logo: 'https://www.arweave.net/N_pDeYTYERWexWo2E3-mzZhqMtqdcqA_ZktPva4ImnY?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("6AarZpv8KwmPBxBEZdRmd3g1q2tUBaSgTNQ5e621qcZQ"),
      //   symbol: 'DAPE',
      //   name: 'Degenerate Ape Academy',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreie44hlb5xve225n6p2siebaevxiwha37aefyvs2ul2kx2akalnree.ipfs.dweb.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("3dgCCb15HMQSA4Pn3Tfii5vRk7aRqTH95LJjxzsG2Mug"),
      //   symbol: 'HXD',
      //   name: 'Honeyland',
      //   logo: 'https://arweave.net/NHZyHFvooDi_LKgs1BaHVPMsuRSOoHpE-J26fp1uHGQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3"),
      //   symbol: 'prtSOL',
      //   name: 'prtSOL (Parrot Staked SOL)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BdZPG9xWrG3uFrx2KrUW1jT4tZ9VKPDWknYihzoPRJS3/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3RCVCywxSs8pDRU1hw8fo7xTUCpNuX86w8cKTM6fgWBY"),
      //   symbol: 'FOXES',
      //   name: 'Famous Fox Federation',
      //   logo: 'https://cloudflare-ipfs.com/ipfs/Qmetu9eyf7jxE9cNV9MYMWborQBGHqurt1MvD2LjwDcumy',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("HkSiK3rrAf4JHXN7Cf1j7GsLofX9jo8962xabT1qiff1"),
      //   symbol: 'SATORI',
      //   name: 'Satori',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafkreieavkjl5rchszvydi7asd3e7jzms5cw6ggixjfto6euuxd3ido7ui.ipfs.dweb.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("CCRJohp9bfQdhZCvCe7MzUQuXMJkKBi4XCjUq3A2YqN8"),
      //   symbol: 'BOOP',
      //   name: 'BOOP',
      //   logo: 'https://arweave.net/2ArDrNlyF34gjZ7UdXmMVl_ET9igdcyDiAY-VFsw3ao',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 10
      // }
      // ,
      // {
      //   mint: new PublicKey("EcQCUYv57C4V6RoPxkVUiDwtX1SP8y8FP5AEToYL8Az"),
      //   symbol: 'WLKN',
      //   name: 'Walken',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EcQCUYv57C4V6RoPxkVUiDwtX1SP8y8FP5AEToYL8Az/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FmQ7v2QUqXVVtAXkngBh3Mwx7s3mKT55nQ5Z673dURYS"),
      //   symbol: 'DARK',
      //   name: 'Dark Protocol',
      //   logo: 'https://www.arweave.net/3VPYgJz-wlRAm1H5_4zrsAckyz55qa5ILyk3Uq6l4Ms?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AWeL8nCXxJm3GZkEVRqxeeT5KWT2KwDa1shgQFeBogkC"),
      //   symbol: 'VICE',
      //   name: 'VICE',
      //   logo: 'https://bafybeieprtdo3xgvk2ezdlqd47lhcnwdqneoig7jiiiuodoy36jmu6jhte.ipfs.dweb.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Cx9oLynYgC3RrgXzin7U417hNY9D6YB1eMGw4ZMbWJgw"),
      //   symbol: 'FOMO',
      //   name: 'FOMO',
      //   logo: 'https://bt2uza2xywhm2tm5kjhm35xlxhtcqb3le272fir7rpnijpfbsnlq.arweave.net/DPVMg1fFjs1NnVJOzfbrueYoB2smv6KiP4vahLyhk1c',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6XWfkyg5mzGtKNftSDgYjyoPyUsLRf2rafj95XSFSFrr"),
      //   symbol: 'KITTY',
      //   name: 'Kitty Coin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6XWfkyg5mzGtKNftSDgYjyoPyUsLRf2rafj95XSFSFrr/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8rEEAvq6kujW2ukjYHfutH5eToAwsK4aaJ8p1ApoMs9g"),
      //   symbol: 'SD',
      //   name: 'Shark Dog',
      //   logo: 'https://cf-ipfs.com/ipfs/QmeAuc8Cf34rUnmSDq9RXm8gFUeSxwFu1hWS5RgDAfb7J6',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4TUNzcgp2fPD48fcW4seRjyqyDZMrPj4ZubnXFEsKeYk"),
      //   symbol: 'PRNT',
      //   name: 'PRNT',
      //   logo: 'https://shdw-drive.genesysgo.net/EYH4kEfffWwRnF63G6Sx68sHdhkue4trzuSeUji9UJSe/prnt.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("4nhQdXfoHvCCVnyZQg3awXqPrKL89Ys7Rbe77oXM47GG"),
      //   symbol: 'AIO',
      //   name: 'AIO Exchange Token',
      //   logo: 'https://raw.githubusercontent.com/adminesc/AIO_EXCHANGE_Token/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GTuDe5yneFKaWSsPqqKgu413KTk8WyDnUZcZUGxuNYsT"),
      //   symbol: 'DASCH',
      //   name: 'Dasch Coin',
      //   logo: 'https://github.com/kennethoqs/dasch/blob/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("iVNcrNE9BRZBC9Aqf753iZiZfbszeAVUoikgT9yvr2a"),
      //   symbol: 'IVN',
      //   name: 'Investin Protocol',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/iVNcrNE9BRZBC9Aqf753iZiZfbszeAVUoikgT9yvr2a/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("83LGLCm7QKpYZbX8q4W2kYWbtt8NJBwbVwEepzkVnJ9y"),
      //   symbol: 'xUSD',
      //   name: 'Synthetic USD',
      //   logo: 'https://www.synthetify.io/icons/xusd.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FYfQ9uaRaYvRiaEGUmct45F9WKam3BYXArTrotnTNFXF"),
      //   symbol: 'SOLA',
      //   name: 'Sola Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FYfQ9uaRaYvRiaEGUmct45F9WKam3BYXArTrotnTNFXF/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9ae76zqD3cgzR9gvf5Thc2NN3ACF7rqqnrLqxNzgcre6"),
      //   symbol: 'WIPE',
      //   name: 'WipeMyAss',
      //   logo: 'https://cdn.jsdelivr.net/gh/rxrxrxrx/WipeMyAss/wipemyass.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9w6LpS7RU1DKftiwH3NgShtXbkMM1ke9iNU4g3MBXSUs"),
      //   symbol: 'aeDAI',
      //   name: 'Wrapped DAI (Allbridge from Ethereum)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Gm6szibJfB1ZzUxNYf85nXwFchugqTqNyE5fDwWfBc7K"),
      //   symbol: 'ILU',
      //   name: 'ILoveU Token',
      //   logo: 'https://raw.githubusercontent.com/rjdrar/crypto/main/symbol-1.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FnKE9n6aGjQoNWRBZXy4RW6LZVao7qwBonUbiD7edUmZ"),
      //   symbol: 'SYP',
      //   name: 'Sypool',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/b0e47e39f84cffb655f406eb569c57a88b5211cc/assets/mainnet/FnKE9n6aGjQoNWRBZXy4RW6LZVao7qwBonUbiD7edUmZ/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FkbWN4dcFQym2PgCELfThghQqLuA2e2jThMJyhZjfG4M"),
      //   symbol: 'SBF',
      //   name: 'SBF',
      //   logo: 'https://bafkreifhqihaiwyo4g2aogdu4qyfqftkxy3aq4xxbhoxdkbkufrobsnjwm.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("5HsZR8eG7QpQcN8Mnp8oFdENRkJMP9ZkcKhPSCKTJSWh"),
      //   symbol: 'MRC',
      //   name: 'Moon Roll Coin',
      //   logo: 'https://moonroll-bucket.s3.amazonaws.com/token-image/Frame.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HovGjrBGTfna4dvg6exkMxXuexB3tUfEZKcut8AWowXj"),
      //   symbol: 'FCON',
      //   name: 'Space Falcon',
      //   logo: 'https://raw.githubusercontent.com/spacefalcon-io/crypto/main/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("prmmgF5GJCSDNEcwZe2HWb5DsDsFngxTetZ95C4VKxX"),
      //   symbol: 'PRM',
      //   name: 'PRM Token',
      //   logo: 'https://shdw-drive.genesysgo.net/4vcTsRNEvNjaG5JLLvURuEM5V4y9RdBF1BVR4YrGNpem/PRM.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("fujiCeCeP9AFDVCv27P5JRcKLoH7wfs2C9xmDECs24m"),
      //   symbol: 'FUJI',
      //   name: 'FUJI',
      //   logo: 'https://raw.githubusercontent.com/MarkSackerberg/token-list/main/assets/mainnet/fujiCeCeP9AFDVCv27P5JRcKLoH7wfs2C9xmDECs24m/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("unknXbA1bDg39nuBqVgMNZ5qSZa8pw5HditgkPe5eFA"),
      //   symbol: 'UNKN',
      //   name: 'UNKN',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/unknXbA1bDg39nuBqVgMNZ5qSZa8pw5HditgkPe5eFA/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("PUhuAtMHsKavMTwZsLaDeKy2jb7ciETHJP7rhbKLJGY"),
      //   symbol: 'USN',
      //   name: 'USN (Allbridge from Near)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PUhuAtMHsKavMTwZsLaDeKy2jb7ciETHJP7rhbKLJGY/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Uuc6hiKT9Y6ASoqs2phonGGw2LAtecfJu9yEohppzWH"),
      //   symbol: 'BABY',
      //   name: 'Baby Samo Coin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Uuc6hiKT9Y6ASoqs2phonGGw2LAtecfJu9yEohppzWH/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EjzzyCSiLqjFDprpZj8e1zjXmcTG5HPGFRSEoWcJWHh9"),
      //   symbol: 'INBRED',
      //   name: 'INBRED CAT',
      //   logo: 'https://arweave.net/iVf74QkkM6G7JfKjwkl37xbFEq0FCU4o5PLGH3--i2o',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("TKDrcm3n4mfXFfPKZoLp5soRSdFQSmyWLdomdKL3ktU"),
      //   symbol: 'TENKAI',
      //   name: 'Tenkai Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/TKDrcm3n4mfXFfPKZoLp5soRSdFQSmyWLdomdKL3ktU/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("6hBry7w55A3NXDAXxjKqrx3oXfAatNkAJUSGt66ZRsZk"),
      //   symbol: 'SANDY',
      //   name: 'Sandy',
      //   logo: 'https://bafkreieur42wdbsrrlglcz6kp55kruavaxisd25o42fnydemcvp5qulf2i.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("BaoawH9p2J8yUK9r5YXQs3hQwmUJgscACjmTkh8rMwYL"),
      //   symbol: 'ALL',
      //   name: 'AllDomains',
      //   logo: 'https://arweave.net/FY7yQGrLCAvKAup_SYEsHDoTRZXsttuYyQjvHTnOrYk',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp"),
      //   symbol: 'SLND',
      //   name: 'Solend',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SLNDpmoWTVADgEdndyvWzroNL7zSi1dF9PC3xHGtPwp/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2zzC22UBgJGCYPdFyo7GDwz7YHq5SozJc1nnBqLU8oZb"),
      //   symbol: '1SP',
      //   name: '1SPACE',
      //   logo: 'https://1space.me/images/1SP_logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("A6JVLMAjR1aeCfz3X2z4vVQ9GafYWVT75tC5V5qefja2"),
      //   symbol: 'BULB',
      //   name: 'BULB Token',
      //   logo: 'https://www.arweave.net/3UIriLHyPZSzz637FQjn5kNm72Sc-2DG5vK45Vkmx3o?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FNMLmBPkhh7nBFyGHsdrmCuvgEf6ygpaVqFejimHEx9V"),
      //   symbol: 'vBLSH',
      //   name: 'vBLSH',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FNMLmBPkhh7nBFyGHsdrmCuvgEf6ygpaVqFejimHEx9V/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC"),
      //   symbol: 'LARIX',
      //   name: 'Larix',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Lrxqnh6ZHKbGy3dcrCED43nsoLkM1LTzU2jRfWe8qUC/logo.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("BhPXDQio8xtNC6k5Bg5fnUVL9kGN8uvRDNwW8MZBu8DL"),
      //   symbol: 'BANA',
      //   name: 'Shibana',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BhPXDQio8xtNC6k5Bg5fnUVL9kGN8uvRDNwW8MZBu8DL/Shibana.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("DMqv9nGbEVAkQoz13ncKh5XJrFg2BQ5YTwd1XrGEKkaz"),
      //   symbol: 'FSM',
      //   name: 'Flying Spaghetti Monster',
      //   logo: 'https://bafybeibxoen5asgzdf7kz6jlac6656s3a2xpfc2m3t77m73pfwy6keh6gu.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("5MRMqvLZyRQhrMn2a8vSL3Kv9vfjNhjRKRPHtTBz1VEB"),
      //   symbol: 'SOLMEME',
      //   name: 'Solana Meme',
      //   logo: 'https://raw.githubusercontent.com/solmemetoken/solememe/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("FNFKRV3V8DtA3gVJN6UshMiLGYA8izxFwkNWmJbFjmRj"),
      //   symbol: 'TTT',
      //   name: 'TabTrader Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FNFKRV3V8DtA3gVJN6UshMiLGYA8izxFwkNWmJbFjmRj/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm"),
      //   symbol: 'wUST_v1',
      //   name: 'Wrapped UST (Wormhole v1)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CXLBjMMcwkc17GfJtBos6rQCo1ypeH6eDbB82Kby4MRm/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("PRAxfbouRoJ9yZqhyejEAH6RvjJ86Y82vfiZTBSM3xG"),
      //   symbol: 'PRANA',
      //   name: 'prANA',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRAxfbouRoJ9yZqhyejEAH6RvjJ86Y82vfiZTBSM3xG/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("AUrMpCDYYcPuHhyNX8gEEqbmDPFUpBpHrNW3vPeCFn5Z"),
      //   symbol: 'AVAX',
      //   name: 'AVAX (Allbridge from Avalanche)',
      //   logo: 'https://assets.coingecko.com/coins/images/12559/small/coin-round-red.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GYCVdmDthkf3jSz5ns6fkzCmHub7FSZxjVCfbfGqkH7P"),
      //   symbol: 'GYC',
      //   name: 'GameYoo Token',
      //   logo: 'https://raw.githubusercontent.com/gameyoo/materials/main/gyc.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EPeUFDgHRxs9xxEPVaL6kfGQvCon7jmAWKVUHuux1Tpz"),
      //   symbol: 'BAT',
      //   name: 'Basic Attention Token (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BAT_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("8A9HYfj9WAMgjxARWVCJHAeq9i8vdN9cerBmqUamDj7U"),
      //   symbol: 'ELE',
      //   name: 'Elementerra',
      //   logo: 'https://elementerra.s3.amazonaws.com/images/elementum.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HtbhBYdcfXbbD2JiH6jtsTt2m2FXjn7h4k6iXfz98k5W"),
      //   symbol: 'DKM',
      //   name: 'DeadKnight Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HtbhBYdcfXbbD2JiH6jtsTt2m2FXjn7h4k6iXfz98k5W/dkmlogo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("48ntzCLdm9apLbZ8JV5b2s3teMZ1ij1XqokJiqiRYmb3"),
      //   symbol: 'RESTACK',
      //   name: 'Restack Coin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/48ntzCLdm9apLbZ8JV5b2s3teMZ1ij1XqokJiqiRYmb3/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("51tMb3zBKDiQhNwGqpgwbavaGH54mk8fXFzxTc1xnasg"),
      //   symbol: 'APEX',
      //   name: 'APEX',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/51tMb3zBKDiQhNwGqpgwbavaGH54mk8fXFzxTc1xnasg/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EMAb1cexvwrMeViyYiK8941V7SGWiXsyhMREBcswggPw"),
      //   symbol: 'BSLSK',
      //   name: 'Basilisk',
      //   logo: 'https://i.postimg.cc/d0j6rRWH/Dark-BASLSK-666x666.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("9TE7ebz1dsFo1uQ2T4oYAKSm39Y6fWuHrd6Uk6XaiD16"),
      //   symbol: 'MIMO',
      //   name: 'Million Monke',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9TE7ebz1dsFo1uQ2T4oYAKSm39Y6fWuHrd6Uk6XaiD16/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("7SEsxCsiNiYqCpYG16wx4c9u2YGLZphnEFTAU9ENAizD"),
      //   symbol: 'RING',
      //   name: 'RING',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7SEsxCsiNiYqCpYG16wx4c9u2YGLZphnEFTAU9ENAizD/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CpFE715P5DnDoJj9FbCRcuyHHeTXNdRnvzNkHvq1o23U"),
      //   symbol: 'DARC',
      //   name: 'DARC Token',
      //   logo: 'https://raw.githubusercontent.com/Konstellation/DARC_token/main/256darctoken.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("6vUQsePjhpH67Db6p7Koj1wQsQP1UtovBkWXSrC1DkaA"),
      //   symbol: 'WIFS',
      //   name: 'dogwifscarf',
      //   logo: 'https://bafybeigzgek3mu5mobqo7kwk77g5ieliaqmsbdeav6qm6jj62mhdt6lw3q.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("xnorPhAzWXUczCP3KjU5yDxmKKZi5cSbxytQ1LgE3kG"),
      //   symbol: 'SRMet',
      //   name: 'Serum (Portal from Ethereum)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SRMet_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("APTtJyaRX5yGTsJU522N4VYWg3vCvSb65eam5GrPT5Rt"),
      //   symbol: 'APT',
      //   name: 'Apricot',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/APTtJyaRX5yGTsJU522N4VYWg3vCvSb65eam5GrPT5Rt/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("88YqDBWxYhhwPbExF966EdaCYBKP51xVm1oGBcbWzcf2"),
      //   symbol: 'GRLC',
      //   name: 'Garlic',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/88YqDBWxYhhwPbExF966EdaCYBKP51xVm1oGBcbWzcf2/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("E8G4uo2i9d12aGnXDHXXcw6hU2fh2NytR5XR3qurTLBx"),
      //   symbol: 'WNDO',
      //   name: 'WNDO',
      //   logo: 'https://static1.squarespace.com/static/6252f1590fac8d79fb6d772e/t/627682f25295251e0967c29c/1651933939477/wndocoin.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Gnca3UkjR4a1FFNZuGfEELmbaHkL6GteSC2swpdWRmf7"),
      //   symbol: 'DPAY',
      //   name: 'Devour',
      //   logo: 'https://tokens.debridge.finance/0x39b22d4e4dd2668575e36ed9ce554a1ed4a436f4cce8777c450ec0fc5187cb5e.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("kNkT1RDnexWqYP3EYGyWv5ZtazB8CfgGAfJtv9AQ3kz"),
      //   symbol: 'KNK',
      //   name: 'Kineko',
      //   logo: 'https://www.arweave.net/u7prAs3T9UHwykErAXDfX306yAxFU08PpgvN819K_so?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("METADDFL6wWMWEoKTFJwcThTbUmtarRJZjRpzUvkxhr"),
      //   symbol: 'META',
      //   name: 'META',
      //   logo: 'https://6hgaiayuroxlfrn3djpb7mx4ocwielgo2ovpj4ka4v47jsxj2p2a.arweave.net/8cwEAxSLrrLFuxpeH7L8cKyCLM7TqvTxQOV59Mrp0_Q?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9LzCMqDgTKYz9Drzqnpgee3SGa89up3a247ypMj2xrqM"),
      //   symbol: 'AUDIO',
      //   name: 'Audius (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/AUDIO_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("8Wqbst4qAN2FqBCCh5gdXq2WJ7vTNWEY4oNLrpUg7Tya"),
      //   symbol: 'MDT',
      //   name: 'Measurable Data Token (Wormhole)',
      //   logo: 'https://assets.coingecko.com/coins/images/2441/standard/mdt_logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("4onzDs1X6ubktirorHB8iYbve3K4bBtkGpYehqzGm9So"),
      //   symbol: 'BIJU',
      //   name: 'BIJU',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4onzDs1X6ubktirorHB8iYbve3K4bBtkGpYehqzGm9So/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6ybxMQpMgQhtsTLhvHZqk8uqao7kvoexY6e8JmCTqAB1"),
      //   symbol: 'QUEST',
      //   name: 'QUEST',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6ybxMQpMgQhtsTLhvHZqk8uqao7kvoexY6e8JmCTqAB1/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("4h41QKUkQPd2pCAFXNNgZUyGUxQ6E7fMexaZZHziCvhh"),
      //   symbol: 'SUITE',
      //   name: 'The Suites Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4h41QKUkQPd2pCAFXNNgZUyGUxQ6E7fMexaZZHziCvhh/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("ASoLXbfe7cd6igh5yiEsU8M7FW64QRxPKkxk7sjAfond"),
      //   symbol: 'aSOL',
      //   name: 'aSOL Aggregate Solana Stake Pool',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ASoLXbfe7cd6igh5yiEsU8M7FW64QRxPKkxk7sjAfond/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("bootyAfCh1eSQeKhFaDjN9Pu6zwPmAoQPoJWVuPasjJ"),
      //   symbol: 'BOOTY',
      //   name: 'BOOTY',
      //   logo: 'https://arweave.net/N-9sTPFfUhoFzJ6prtY2hItNkVaHVAktRDiuQrHwWhQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FR87nWEUxVgerFGhZM8Y4AggKGLnaXswr1Pd8wZ4kZcp"),
      //   symbol: 'FRAX',
      //   name: 'Frax (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/FRAX_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("a11bdAAuV8iB2fu7X6AxAvDTo1QZ8FXB3kk5eecdasp"),
      //   symbol: 'ABR',
      //   name: 'Allbridge',
      //   logo: 'https://raw.githubusercontent.com/allbridge-io/media/main/token.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GRJQtWwdJmp5LLpy8JWjPgn5FnLyqSJGNhn5ZnCTFUwM"),
      //   symbol: 'clockSOL',
      //   name: 'Overclock SOL',
      //   logo: 'https://raw.githubusercontent.com/Overclock-Validator/assets/main/img.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("J4ywFdm8H7hjwKzCaEQujhkDRfCnRviVnHMvFNDAoLNQ"),
      //   symbol: 'SOUL',
      //   name: 'Soul Scanner',
      //   logo: 'https://bafkreifwlzwmmrnt2pjp2w4frbdzkbv7ml224ukuv3uiuhahgqinqtluii.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("5jFnsfx36DyGk8uVGrbXnVUMTsBkPXGpx6e69BiGFzko"),
      //   symbol: 'INU',
      //   name: 'Solana INU',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5jFnsfx36DyGk8uVGrbXnVUMTsBkPXGpx6e69BiGFzko/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac"),
      //   symbol: 'MNGO',
      //   name: 'Mango',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MangoCzJ36AjZyKwVj3VnYU4GTonjfVEnJmvvWaxLac/token.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FsPncBfeDV3Uv9g6yyx1NnKidvUeCaAiT2NtBAPy17xg"),
      //   symbol: 'XGLI',
      //   name: 'Glitter Finance',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FsPncBfeDV3Uv9g6yyx1NnKidvUeCaAiT2NtBAPy17xg/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("HJ39rRZ6ys22KdB3USxDgNsL7RKiQmsC3yL8AS3Suuku"),
      //   symbol: 'UPDOG',
      //   name: "What's Updog?",
      //   logo: 'https://arweave.net/utcdLmTdNHmyD02oMfQn9Yc5L4UbwrtCtka3gpQQas4',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("7DGJnYfJrYiP5CKBx6wpbu8F5Ya1swdFoesuCrAKCzZc"),
      //   symbol: 'MELON',
      //   name: 'Melon Dog',
      //   logo: 'https://arweave.net/5VQtSLt9kwn-FlP4ulK9DjuowQZnLm2zarHqda2MhPI',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2FprjEk4MTSY9CxpKuENbGDdy69R15GHhtHpG5Durdbq"),
      //   symbol: 'HorseMeat',
      //   name: 'Horse Meat',
      //   logo: 'https://i.imgur.com/uKfGicj.jpeg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("F1n2Tn7Eb9jTbSQiqy2Z7G4VTbkreHGQqcRKKmwZv726"),
      //   symbol: 'CFA',
      //   name: 'Tradfi Bro',
      //   logo: 'https://turquoise-elderly-caribou-768.mypinata.cloud/ipfs/QmcnF55f9w2eT1LQQPgCRanXeAmz7DUb7QZCkJDewC21oS',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HrLx8MLKegpbmbmWePZiuvf3AbJNx1CJyjBwUHwicEgW"),
      //   symbol: 'NYXC',
      //   name: 'Nyxia Coin',
      //   logo: 'http://nyxia.ai/NYXC_coin-200.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("AUwugnCh1tFc5scRHLNqnHjfcRbHRsq7yrKFUe7Ysmgs"),
      //   symbol: 'CZOL',
      //   name: 'CZOLANA',
      //   logo: 'https://arweave.net/Ltq2jLtJDONPhaWZKJvGWvJQAAea3eGrb5onwvjyMTM',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("76gDMbyohg6yHy6XJ2Rn9kxC22Q6v6uYpPXxkiwR5ota"),
      //   symbol: 'MOAR',
      //   name: 'MOAR GAINZ',
      //   logo: 'https://bafkreidv3a37niwg56nytrh2dijfs3vqzebedww6dt5fp2kr46pst7kyui.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("CgbJxXyaHeU8VsquBpySuFXA94b6LWXxioZ28wRr8fs9"),
      //   symbol: 'VINU',
      //   name: 'Viral Inu',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CgbJxXyaHeU8VsquBpySuFXA94b6LWXxioZ28wRr8fs9/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("54jVZGHyWURX5evBtZqUsJjwoKzcZJbVokDU93AUZf2h"),
      //   symbol: 'STREAM',
      //   name: 'Solstream',
      //   logo: 'https://i.ibb.co/B6Qwtnb/LOGO-SOLSTREAM-100.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG"),
      //   symbol: 'soLINK',
      //   name: 'Wrapped Chainlink (Sollet)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CWE8jPTUYhdCTZYWPTe1o5DFqfdjzWKc9WKz6rSjQUdG/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("E1kvzJNxShvvWTrudokpzuc789vRiDXfXG3duCuY6ooE"),
      //   symbol: 'DITH',
      //   name: 'Dither',
      //   logo: 'https://zxejrbfcjk7fa67anpyuavtssrkgvbek4onzbza2v56flew72cta.arweave.net/zciYhKJKvlB74GvxQFZylFRqhIrjm5DkGq98VZLf0KY?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("A9mUU4qviSctJVPJdBJWkb28deg915LYJKrzQ19ji3FM"),
      //   symbol: 'USDCet',
      //   name: 'USD Coin (Portal from Ethereum)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCet_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8TQdiAzdZZEtkWUR8Zj1tqDYGPv9TR1XjPqrew39Vq9V"),
      //   symbol: 'HYPE',
      //   name: 'HypeProxy',
      //   logo: 'https://raw.githubusercontent.com/hypeproxy/hypeproxy/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("Cj2NAxiDDVvY79PLBdVQK3F3bjoHp7hvZv4kLL1vgtV3"),
      //   symbol: 'MADx',
      //   name: 'Mad Lads',
      //   logo: 'https://creator-hub-prod.s3.us-east-2.amazonaws.com/mad_lads_pfp_1682211343777.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("ANqY8h3sRSwkC29FvGJenAh7VGRABVVx7Ls6Mq4BuGT"),
      //   symbol: 'ZIG',
      //   name: 'ZIG Coin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ANqY8h3sRSwkC29FvGJenAh7VGRABVVx7Ls6Mq4BuGT/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("UNQtEecZ5Zb4gSSVHCAWUQEoNnSVEbWiKCi1v9kdUJJ"),
      //   symbol: 'UNQ',
      //   name: 'Unique Venture Clubs',
      //   logo: 'https://www.arweave.net/X58AnJYdgZRbTNyf5HzavUD7daqAtuPnz0JcUACU70Y?ext=jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("PzuaVAUH2tfxGZcbBR6kMxeJsBngnsPLFotGJNCtcsd"),
      //   symbol: 'ZYN',
      //   name: 'ZynCoin (Wormhole)',
      //   logo: 'https://pbs.twimg.com/profile_images/1734964928434294784/pjyf-A-E.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("BYATmZ7ry2pewxW3213sczJYB7ZJzPr921uvcRcJYYZQ"),
      //   symbol: 'BYAT',
      //   name: 'Byat',
      //   logo: 'https://bafybeiebc4yrvojgwxcbhla4hgg6vswqapei4vos2wivdo5whpzh4kgybe.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3J5QaP1zJN9yXE7jr5XJa3Lq2TyGHSHu2wssK7N1Aw4p"),
      //   symbol: '$WEN',
      //   name: 'WEN',
      //   logo: 'https://arweave.net/sfrKTJisIlWsNJfw6GWnsitsbUbN6WIjoVJZWMe2Mdk',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GoLDYyyiVeXnVf9qgoK712N5esm1cCbHEK9aNJFx47Sx"),
      //   symbol: 'GOLDY',
      //   name: 'DeFi Land Gold',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GoLDYyyiVeXnVf9qgoK712N5esm1cCbHEK9aNJFx47Sx/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Hmatmu1ktLbobSvim94mfpZmjL5iiyoM1zidtXJRAdLZ"),
      //   symbol: 'PSOL',
      //   name: 'Parasol',
      //   logo: 'https://raw.githubusercontent.com/parasol-finance/white-paper/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE"),
      //   symbol: 'HAWK',
      //   name: 'Hawksight',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BKipkearSqAUdNKa1WDstvcMjoPsSKBuNyvKDQDDu9WE/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("picobAEvs6w7QEknPce34wAE4gknZA9v5tTonnmHYdX"),
      //   symbol: 'picoSOL',
      //   name: 'picoSOL',
      //   logo: 'https://arweave.net/zR2ZKXpwmG4hMpqhGXlvz-B7PMs34cXxVb2gC1DmlDo',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("F8qtcT3qnwQ24CHksuRrSELtm5k9ob8j64xAzj3JjsMs"),
      //   symbol: 'BURRRD',
      //   name: 'BURRRD',
      //   logo: 'https://arweave.net/5qQw9rLaDDQeFJ6-384p8yRmnl_8zK47JBwl3QYmD60',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("8bqjz8DeSuim1sEAsQatjJN4zseyxSPdhHQcuuhL8PCK"),
      //   symbol: 'xETH',
      //   name: 'Synthetic ETH',
      //   logo: 'https://www.synthetify.io/icons/xeth.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("31iQsahfa4CMiirU7REygBzuAWg4R4ah7Y4aDu9ZfXJP"),
      //   symbol: 'SOLZILLA',
      //   name: 'Solzilla',
      //   logo: 'https://raw.githubusercontent.com/Solzilla/Solzilla/main/solzilla512x512.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("BiDB55p4G3n1fGhwKFpxsokBMqgctL4qnZpDH1bVQxMD"),
      //   symbol: 'DIO',
      //   name: 'Decimated',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BiDB55p4G3n1fGhwKFpxsokBMqgctL4qnZpDH1bVQxMD/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9m9fmqJ2s7iUXZhFMsrdes1UcAtu3JyZXK3ZXfW3KPEw"),
      //   symbol: 'BIRDS',
      //   name: 'BIRDIES',
      //   logo: 'https://raw.githubusercontent.com/ArashiSol/Birdies/main/photo1695208363.jpeg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("FDKBUXKxCdNQnDrqP7DLe8Kri3hzFRxcXyoskoPa74rk"),
      //   symbol: '$YETI',
      //   name: 'YETI',
      //   logo: 'https://raw.githubusercontent.com/yet777/tokenlogo/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BANXbTpN8U2cU41FjPxe2Ti37PiT5cCxLUKDQZuJeMMR"),
      //   symbol: 'BANX',
      //   name: 'Banx',
      //   logo: 'https://arweave.net/5QRitQGPVjPwpjt43Qe_WISmys4dWwLMqQqQDT0oshg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Bx1fDtvTN6NvE4kjdPHQXtmGSg582bZx9fGy4DQNMmAT"),
      //   symbol: 'SOLC',
      //   name: 'Solcubator',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Bx1fDtvTN6NvE4kjdPHQXtmGSg582bZx9fGy4DQNMmAT/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DoxsC4PpVHiUxCKYeKSkPXVVVSJYzidZZJxW4XCFF2t"),
      //   symbol: 'BONKFA',
      //   name: 'Bonk of America',
      //   logo: 'https://bafybeibh32qfakyjqnxl2p3zyndqmtubjcwkbiimk3qcb6v4wyzekmr5x4.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("EVoLsbmQXT6R3b11WjPpGEXyCjw1zmmir271XqDbKRsg"),
      //   symbol: 'EVOL',
      //   name: 'Evolve',
      //   logo: 'https://bafkreidpaebbynfkp2zpljslaugedn2fkvlujoanerpcifgppxdxhm4kxm.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A"),
      //   symbol: 'MBS',
      //   name: 'MonkeyBucks',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Fm9rHUTF5v3hwMLbStjZXqNBBoZyGriQaFM6sTFz3K8A/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU"),
      //   symbol: 'wFRAX_v1',
      //   name: 'Frax (Wormhole v1)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8L8pDf3jutdpdr4m3np68CL9ZroLActrqwxi6s9Ah5xU/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("LMDAmLNduiDmSiMxgae1gW7ubArfEGdAfTpKohqE5gn"),
      //   symbol: 'LMDA',
      //   name: 'lambda.markets',
      //   logo: 'https://arweave.net/6y2eY-KEaBu4KbZLJwLCTQQUXhWVPKxjgdyW69DwI0o',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DBAzBUXaLj1qANCseUPZz4sp9F8d2sc78C4vKjhbTGMA"),
      //   symbol: 'SBC',
      //   name: 'Stable Coin',
      //   logo: 'https://brale.xyz/assets/stablecoins/sbc-logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("7raHqUrZXAqtxFJ2wcmtpH7SQYLeN9447vD4KhZM7tcP"),
      //   symbol: 'DED',
      //   name: 'DED',
      //   logo: 'https://cdn.bridgesplit.com/?fit=crop&height=400&width=400&image=https://www.arweave.net/nE_JLSoMnDq5bOuQLO7-UhTvlOmC6264v90IVB7ntjQ?ext=gif',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("42KmnheUHt3UaQFoAKnipLgBJ1Zm427heJdQcHGPtnjc"),
      //   symbol: '$TURBO',
      //   name: 'TURBO on Solana',
      //   logo: 'https://arweave.net/FVrzsx6r7mwCakD64Axt59qAB_g-nvYfA0wvWydw5u0',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("CobcsUrt3p91FwvULYKorQejgsm5HoQdv5T8RUZ6PnLA"),
      //   symbol: 'PEOPLE',
      //   name: 'ConstitutionDAO (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/PEOPLE_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("C6qep3y7tCZUJYDXHiwuK46Gt6FsoxLi8qV1bTCRYaY1"),
      //   symbol: 'LSTAR',
      //   name: 'Learning Star',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/D3yigvdWq6qobhAwQL6UiSide5W9W7zcJbuVvKa3T231/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("BZKuDqzD4rb2puUV2cbSNd2kZzJ5JzKiQKwBzCk8hrLu"),
      //   symbol: 'pipi',
      //   name: 'pipi the cat',
      //   logo: 'https://i.ibb.co/mChpPQK/photo-2024-01-14-01-32-58.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EavJDLh8cYTAnt3QDitpKGMsPL2hq1My5g9R2P6at6Lc"),
      //   symbol: 'CATMAN',
      //   name: 'CATMAN',
      //   logo: 'https://bafkreieawm4zgovoxfbgkifdyiyagsieaa6cns4jb4jafxolc5z3lqysju.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("suPer8CPwxoJPQ7zksGMwFvjBQhjAHwUMmPV4FVatBw"),
      //   symbol: 'superSOL',
      //   name: 'Superfast Staked SOL',
      //   logo: 'https://shdw-drive.genesysgo.net/4gc2wnbccgLyMyoRajokp86EfWsmW8obkdUzNRmeHnDi/superSOLLogo.webp',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Ceqwd4CSGBZnW8PHEexBQCAV2NDPkBoSqheiKR7gzELV"),
      //   symbol: 'BABS',
      //   name: 'BABS',
      //   logo: 'https://iili.io/HaOytTu.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("F14Cp89oAXMrNnaC4mKMNKHPWw2p2R4DRFAZEdJhUBkD"),
      //   symbol: 'MOONBURN',
      //   name: 'MOONBURN',
      //   logo: 'https://raw.githubusercontent.com/Joblo197/Crypto/main/Shroom%20Logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7Cx1fMabGWgm86xvv73WzSAcwtLppKf39Ywe8e6Qq4T6"),
      //   symbol: 'TMOON',
      //   name: 'TurboMoon',
      //   logo: 'https://bafkreiejjzcetjeauph77cgxrrx73btwjvd6v2sbwwygnleg2mzir6k2zi.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("GsNzxJfFn6zQdJGeYsupJWzUAm57Ba7335mfhWvFiE9Z"),
      //   symbol: 'DXL',
      //   name: 'Dexlab',
      //   logo: 'https://raw.githubusercontent.com/dexlab-project/assets/master/dexlab/dexlab_symbol_logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K"),
      //   symbol: 'MER',
      //   name: 'Mercurial(Deprecated)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MERt85fc5boKw3BW1eYdxonEuJNvXbiMbs6hvheau5K/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("BQXDYWZdtXqeLXFWYeRhLrGh8gcTmDQZQc92ENMaXSry"),
      //   symbol: 'DCAP',
      //   name: 'Doge Capital',
      //   logo: 'https://dl.airtable.com/.attachmentThumbnails/5e07dff05059715ef2478b80cfee0c99/41bbd847',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("CRMaDAzKCWYbhUfsKYA8448vaA1qUzCETd7gNBDzQ1ks"),
      //   symbol: 'CRM',
      //   name: 'Crema',
      //   logo: 'https://www.arweave.net/E6II9rfGbg3zzLugMjtbPGf5sM-JKKky2iXGA5SoYjQ?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HkNokfCXG33eu5vCcS49mq3jZcKZeQSQCyta964YxxYg"),
      //   symbol: 'CRRT',
      //   name: 'Breezy Bunnies Carrot',
      //   logo: 'https://breezybunnies.com/images/3-p-500.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("SKu11EypaFU3gvr8VSAbi13zEC2CPvqbz9s83N3tWHM"),
      //   symbol: 'SKULL',
      //   name: 'Skeleton Crew',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SKu11EypaFU3gvr8VSAbi13zEC2CPvqbz9s83N3tWHM/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("3JoKpqE4kowVTR3Po3gr3sxzLF6vKCvjGx48g8DRx9oN"),
      //   symbol: 'DRAGY',
      //   name: 'Dragy',
      //   logo: 'https://imgur.com/3XfriZN',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ammoK8AkX2wnebQb35cDAZtTkvsXQbi82cGeTnUvvfK"),
      //   symbol: 'AMMO',
      //   name: 'Ammunition',
      //   logo: 'https://storage.googleapis.com/nft-assets/items/AMMO.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("DEVwHJ57QMPPArD2CyjboMbdWvjEMjXRigYpaUNDTD7o"),
      //   symbol: 'DWH',
      //   name: 'DevWifHat',
      //   logo: 'https://arweave.net/8axP5eu3H87THPNK3oWV0dJ_-z1zoZGhp-V8LgJ3IBU',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("EkHr62PC6Y1axrLS7cR8YC4BZeW19mtHxQLCLMrf9vnq"),
      //   symbol: 'CIRCLE',
      //   name: 'You Looked',
      //   logo: 'https://i.imgur.com/fEFVS51.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("9DZ58i5vAfk3JaFVYezYzhrVht7j8McZsUbuTcDiSbrP"),
      //   symbol: 'ETX',
      //   name: 'Ethrix',
      //   logo: 'https://arweave.net/iOND5JLSsq_0dka0SnzTsDCl83hu0_-sOQ2fDbQDuTQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("5yxNbU8DgYJZNi3mPD9rs4XLh9ckXrhPjJ5VCujUWg5H"),
      //   symbol: 'FRONK',
      //   name: 'Fronk',
      //   logo: 'https://shdw-drive.genesysgo.net/8tfWzweVe7MAfi8qwiKFnzLq6wuLT7WAPMoQC7DH47Fq/fronk.gif',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3"),
      //   symbol: 'soFTT',
      //   name: 'Wrapped FTT (Sollet)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AGFEad2et2ZJif9jaGpdMixQqvW5i81aBdvKe7PHNfz3/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz"),
      //   symbol: 'CRP',
      //   name: 'CropperFinance',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DubwWZNWiNGMMeeQHPnMATNj77YZPZSAz2WVR5WjLJqz/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("G33s1LiUADEBLzN5jL6ocSXqrT2wsUq9W6nZ8o4k1b4L"),
      //   symbol: 'MIM',
      //   name: 'Magic Internet Money',
      //   logo: 'https://bafkreict6ykbea4qa5ulzkkagkihqqvo33frgaqo4kzofgsuyxxjozcuii.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6frkvZf72wiz3uqRWhBqLftNU4PS6XXYCoNrW9P4CFdK"),
      //   symbol: 'QUACK',
      //   name: 'QUACK',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GP9zY2D8CgMreoUdYQjyn7Fo7XCq9ubVnX3u4ot1wpgt/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GzQzkt2B4Jr6whWVBF7XqkzWvoUy1jEd5z9tczzGg1rH"),
      //   symbol: 'DOBI',
      //   name: 'DOBI',
      //   logo: 'https://gateway.irys.xyz/099elCExuWO7iBY2_E-4mZVNLL21Hmj_nxHTGTdUxx0',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FbUy1NubUtCfoif7TAr6wAtJVJFapYUVWxRGmUwvKNyS"),
      //   symbol: 'AFSeX',
      //   name: "𝝠ndre's Fleet Share",
      //   logo: 'https://arweave.net/l5d0WrtUcpUEqwknqjvxlo2QyGryLL3SDsRbigT9HA0',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("NEo3D6MXRXf2iAfaqvZYqSmFkfutLvNjm86xmfGWNh5"),
      //   symbol: 'NEO',
      //   name: 'NEO3D TOKEN',
      //   logo: 'https://raw.githubusercontent.com/minh-git/docusaurus-2/main/static/img/neo3d-logo.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6wktcKujaFRKV9Sz455nHUNz34dEWht1gqKzR5KQ9Ljb"),
      //   symbol: 'SOOSH',
      //   name: 'Soosh',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeig5il3cq3c7wojc323d7kiex3pyoyxcxtufh4m7pvixarvcjiiqga.ipfs.dweb.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("HrqgFZipMFHXvN5nKvTUaCwuA3Tp2UGqcQzArRGAyQ22"),
      //   symbol: 'HAT',
      //   name: 'HAT',
      //   logo: 'https://dd.dexscreener.com/ds-data/tokens/solana/HrqgFZipMFHXvN5nKvTUaCwuA3Tp2UGqcQzArRGAyQ22.png?size=lg&key=43fdcc',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EctmRn2jMAdTDvQdG7mxadyiTvhGZiGYNrt9PWe6zioG"),
      //   symbol: 'SANTA',
      //   name: 'Santaclaus',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EctmRn2jMAdTDvQdG7mxadyiTvhGZiGYNrt9PWe6zioG/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9nEqaUcb16sQ3Tn1psbkWqyhPdLmfHWjKGymREjsAgTE"),
      //   symbol: 'WOOF',
      //   name: 'WOOF',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9nEqaUcb16sQ3Tn1psbkWqyhPdLmfHWjKGymREjsAgTE/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB"),
      //   symbol: 'PUFF',
      //   name: 'PUFF',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/G9tt98aYSznRk7jWsfuz9FnTdokxS6Brohdo9hSmjTRB/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("JxxWsvm9jHt4ah7DT9NuLyVLYZcZLUdPD93PcPQ71Ka"),
      //   symbol: 'mockJUP',
      //   name: 'mockJUP',
      //   logo: 'https://i.pinimg.com/originals/cb/87/f6/cb87f6e8152961be45a5642ef72c391f.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3WV4fTWGvtWNvQb8oVU4t99By8KztDLtExqHnkPfHAA9"),
      //   symbol: 'PAW',
      //   name: 'CopyCats token',
      //   logo: 'https://imagedelivery.net/aAmca-Po70V1nH4n9cT-uA/98c9b68b-1494-43d1-0c2c-31e5d0129a00/public',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("B5Fvzd2RL5ctrmFsvDafXiNGbBqbxapiryJo8JfoSEcA"),
      //   symbol: 'KITTI',
      //   name: 'KITTI TOKEN',
      //   logo: 'https://arweave.net/I1RzcnSel2oghDkMBE-lZBV9b6AuyDJc0Ywo6QmDlSQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("26bedy893CHqi5bcuUFhMgD6uTLw9V9iLWKAQjjDjpEA"),
      //   symbol: 'ICEDOUT',
      //   name: 'Iced Out Bulls',
      //   logo: 'https://icedoutbulls.github.io/icedoutbulls/io_logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5KxnfDmsXVBNkVHYhW4kztV7ZCCCbrkYxBVrqLWF3G7J"),
      //   symbol: 'Rock',
      //   name: 'Rock',
      //   logo: 'https://node2.irys.xyz/m0x31ZCuqG640Dvteo-GmiKaLvD7YvmLnV7WrT7Ugmo',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX"),
      //   symbol: 'pSOL',
      //   name: 'pSOL (Parrot SOL)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9EaLkQrbjmbbuZG9Wdpo8qfNUEjHATJFSycEmw6f1rGX/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("yso11zxLbHA3wBJ9HAtVu6wnesqz9A2qxnhxanasZ4N"),
      //   symbol: 'ySOL',
      //   name: 'Synatra Staked SOL',
      //   logo: 'https://shdw-drive.genesysgo.net/76HCWYyF9Sps1TnRdZB1CtHbj5Ji7trzqi4tnxfCabXE/ysol-logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EP2aYBDD4WvdhnwWLUMyqU69g1ePtEjgYK6qyEAFCHTx"),
      //   symbol: 'KRILL',
      //   name: 'KRILL',
      //   logo: 'https://raw.githubusercontent.com/solanahodlwhales/whitelist/main/Krill_towen.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CRWNYkqdgvhGGae9CKfNka58j6QQkaD5bLhKXvUYqnc1"),
      //   symbol: 'CRWNY',
      //   name: 'Crowny token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CRWNYkqdgvhGGae9CKfNka58j6QQkaD5bLhKXvUYqnc1/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs"),
      //   symbol: 'MEDIA',
      //   name: 'Media Network',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ETAtLmCmsoiEEKfNrHKJ2kYy3MoABhU6NQvpSfij5tDs/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("AhhdRu5YZdjVkKR3wbnUDaymVQL2ucjMQ63sZ3LFHsch"),
      //   symbol: 'VCHF',
      //   name: 'VNX Swiss Franc',
      //   logo: 'https://4183046207-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsAJThQfNCJePE5h9iplX%2Fuploads%2F2fiefVjQxDNLja1fPN7g%2FVCHF%20256x256.png?alt=media&token=b990889a-841a-49f8-9d54-cbe2bb83b7f7',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ForaXiBD8K3a7C1PwxV1xqDHs5aV8y8nWRmHebafdkes"),
      //   symbol: 'FORA',
      //   name: 'Fora',
      //   logo: 'imagepng',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Gz3u6eJaKEviYpPC5AwUziz891kNX76PNdsmJrnaNNY4"),
      //   symbol: 'SOULO',
      //   name: 'SouloCoin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Gz3u6eJaKEviYpPC5AwUziz891kNX76PNdsmJrnaNNY4/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4UuGQgkD3rSeoXatXRWwRfRd21G87d5LiCfkVzNNv1Tt"),
      //   symbol: 'XSB',
      //   name: 'Solareum',
      //   logo: 'https://solareum.app/icons/XSB-G.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("27nqFZqb2iPBeVA7bbE4KPZrJgi3dJdKV9VzhCguSy6Y"),
      //   symbol: 'POZZ',
      //   name: 'PozzCoin',
      //   logo: 'https://raw.githubusercontent.com/dc215007/pozz1/main/logo1.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("YtfMZ4jg2ubdz4GasY86iuGjHdo5rCPJnFqgSf8gxAz"),
      //   symbol: 'CHB',
      //   name: 'Charactbit',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6D4aGWykMymkFaeVzDS6MiH6QEujsHUze2pPGbJEyh7y/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AfPeB1BDUotBeNoLv82XRDCNQcdAA1mqis3YC5SMTe7a"),
      //   symbol: 'WGC',
      //   name: 'Wild Goat Coin',
      //   logo: 'https://gateway.irys.xyz/edk9MSdbuGJv8kXWV7obsLWrIKVPvFpKdwujf4Ss54A',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FLUXBmPhT3Fd1EDVFdg46YREqHBeNypn1h4EbnTzWERX"),
      //   symbol: 'FLUXB',
      //   name: 'FluxBot',
      //   logo: 'https://bafybeiakyhwwesdvxpikjn4kyqddira3hjpjfcn26ycrrezt65bfa7r3gm.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("DcUoGUeNTLhhzyrcz49LE7z3MEFwca2N9uSw1xbVi1gm"),
      //   symbol: 'KPOP',
      //   name: 'K-Pop',
      //   logo: 'https://arweave.net/rzUo3sj5mtF5Q1ceUp0R7X_BOdULgdbL9OhzaFoP11U',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FbJpd8yhrGGkWVL1Ujf7qFvTw4uD4675k8CYk82LEKvZ"),
      //   symbol: 'COMFY',
      //   name: 'SOCOMFY',
      //   logo: 'https://bafybeicg67e5ireijwcndiakcfeiyebhpdk6hcnqislttv5dbsax4kkyse.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("7xd71KP4HwQ4sM936xL8JQZCwE4amUko1AdCCf6Znjrt"),
      //   symbol: 'FREN',
      //   name: 'SOL Frens',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7xd71KP4HwQ4sM936xL8JQZCwE4amUko1AdCCf6Znjrt/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("A1KLoBrKBde8Ty9qtNQUtq3C2ortoC3u7twggz7sEto6"),
      //   symbol: 'USDY',
      //   name: 'Ondo US Dollar Yield',
      //   logo: 'https://hq3wjgefwtje2kue7bvqlevhns2udaharnibucrgui3lhgy4aniq.arweave.net/PDdkmIW00k0qhPhrBZKnbLVBgOCLUBoKJqI2s5scA1E',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7mmXL6Et4SbpDs2iXoZQ3oPEeXeAiyETxh1QjDNi5qnV"),
      //   symbol: 'OMNI',
      //   name: 'OmniCat (Wormhole)',
      //   logo: 'https://raw.githubusercontent.com/mrmeowman/meow-assets/main/omni-logo.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("5U9QqCPhqXAJcEv9uyzFJd5zhN93vuPk1aNNkXnUfPnt"),
      //   symbol: 'SPWN',
      //   name: 'Bitspawn Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5U9QqCPhqXAJcEv9uyzFJd5zhN93vuPk1aNNkXnUfPnt/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BWXrrYFhT7bMHmNBFoQFWdsSgA3yXoAnMhDK6Fn1eSEn"),
      //   symbol: 'HADES',
      //   name: 'Hades',
      //   logo: 'https://arweave.net/dvKu5BgpSo6j-iGzQOyVXYZ8OU7iyfhHNpkkJ_8qkkQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("31k88G5Mq7ptbRDf3AM13HAq6wRQHXHikR8hik7wPygk"),
      //   symbol: 'GP',
      //   name: 'Graphite',
      //   logo: 'https://arweave.net/ALLzymnuIihFPhoNUJpPxQzbGI8LodXKhNzXzbRMPbA',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("sMEANebFMnd9uTYpyntGzBmTmzEukRFwCjEcnXT2E8z"),
      //   symbol: 'sMEAN',
      //   name: 'Staked MEAN',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/sMEANebFMnd9uTYpyntGzBmTmzEukRFwCjEcnXT2E8z/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("YAWtS7vWCSRPckx1agB6sKidVXiXiDUfehXdEUSRGKE"),
      //   symbol: 'YAW',
      //   name: 'Yawww',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/YAWtS7vWCSRPckx1agB6sKidVXiXiDUfehXdEUSRGKE/yaw.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("3XwZtyP5g2ku5cNzLXYcBYygvToXKdjw73GSRq73QYLQ"),
      //   symbol: 'KREECHURE',
      //   name: 'Kreechures',
      //   logo: 'https://cloudflare-ipfs.com/ipfs/QmQLfAMg5aDV2oLeeF5er4hTU5y8wQMB4CaEURxraG6SJd',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("McpgFn2CxFYFq6JLiBxeC6viNfebLsfsf9Sv5wcwKvL"),
      //   symbol: 'DPUNKZ',
      //   name: 'Duck Punkz Universe',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/duckpunkzuniverse_pfp_1650542071140.gif',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("AMzmwvDRKdt5AQ3m1m28tWjzBxmQNe1PsmHnYitVZwzp"),
      //   symbol: 'JUNKz',
      //   name: 'JUNK',
      //   logo: 'https://raw.githubusercontent.com/XAGBack/JUNKToken1/main/JunkToken.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy"),
      //   symbol: 'soSUSHI',
      //   name: 'Wrapped SUSHI (Sollet)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AR1Mtgh7zAtxuxGd2XPovXPVjcSdY3i4rQYisNadjfKy/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("6XfB1VVAxjtfKnF1kotGxLUq4p87xTDp3cCyC6Q2VHNG"),
      //   symbol: 'GRAY',
      //   name: 'Gray',
      //   logo: 'https://arweave.net/sNQ2D1R6C07UbP4mqZqR7P_hmrwje0y3T5_Vyy5lLGM',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DHpoYejUDqzByb6HAdaLWF7KZvwUv2vWYDY9cTENNZui"),
      //   symbol: 'acUSDC',
      //   name: 'Wrapped USDC (Allbridge from Celo)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("SCYfrGCw8aDiqdgcpdGjV6jp4UVVQLuphxTDLNWu36f"),
      //   symbol: 'SCY',
      //   name: 'Synchrony',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SCYfrGCw8aDiqdgcpdGjV6jp4UVVQLuphxTDLNWu36f/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY"),
      //   symbol: 'IN',
      //   name: 'Sol Invictus',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/inL8PMVd6iiW3RCBJnr5AsrRN6nqr4BTrcNuQWQSkvY/logo-owl.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FACTQhZBfRzC7A76antnpAoZtiwYmUfdAN8wz7e8rxC5"),
      //   symbol: 'srenBTC-9',
      //   name: 'Saber Wrapped renBTC (9 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FACTQhZBfRzC7A76antnpAoZtiwYmUfdAN8wz7e8rxC5/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("UST98bfV6EASdTFQrRwCBczpehdMFwYCUdLT5tEbhpW"),
      //   symbol: 'swtUST-9',
      //   name: 'Saber Wrapped UST (Portal) (9 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/UST98bfV6EASdTFQrRwCBczpehdMFwYCUdLT5tEbhpW/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("REdaoGk6EcBVgXW7vHs9FnzWmkr3ba6eHRBBgEtLNWo"),
      //   symbol: '$RE',
      //   name: 'REdao',
      //   logo: 'https://arweave.net/mQfc83s1RVPeQumJ8O6TVS8h9QH1ToSwilJ9USNU1_E',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("F9BqFoWRML4Red6YPiL3xJBP7u9g8f61AKJMEYDB3wBR"),
      //   symbol: 'ATH',
      //   name: 'Athens',
      //   logo: 'https://arweave.net/GNYZdT1icjRPLbRoivdtSU9_GqBM7LF6khrpV9qCBtM',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("66Qq2qS67K4L5xQ3xUTinCyxzdPeZQG1R1ipK8jrY7gc"),
      //   symbol: 'KIWI',
      //   name: 'KIWI Token',
      //   logo: 'https://bafkreibcamcjwo5z3itvybznrdtb3fgeiplfy36izu75jygxkt7jzoq4ju.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("zebeczgi5fSEtbpfQKVZKCJ3WgYXxjkMUkNNx7fLKAF"),
      //   symbol: 'ZBC',
      //   name: 'ZEBEC',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/zebeczgi5fSEtbpfQKVZKCJ3WgYXxjkMUkNNx7fLKAF/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("C98A4nkJXhpVZNAZdHUA95RpTF3T4whtQubL3YobiUX9"),
      //   symbol: 'C98',
      //   name: 'Coin98',
      //   logo: 'https://coin98.s3.ap-southeast-1.amazonaws.com/Coin/c98-512.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DHVUoxNqv3D7EgktBxUsxFF2Wx83hVDmD2wBBpUaw3jn"),
      //   symbol: 'CHP',
      //   name: 'Crypto Health Plus',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DHVUoxNqv3D7EgktBxUsxFF2Wx83hVDmD2wBBpUaw3jn/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ratioMVg27rSZbSvBopUvsdrGUzeALUfFma61mpxc8J"),
      //   symbol: 'RATIO',
      //   name: 'Ratio Governance Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ratioMVg27rSZbSvBopUvsdrGUzeALUfFma61mpxc8J/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("METAewgxyPbgwsseH8T16a39CQ5VyVxZi9zXiDPY18m"),
      //   symbol: 'MPLX',
      //   name: 'Metaplex Token',
      //   logo: 'https://arweave.net/VRKOcXIvCxqp35RZ9I0-bDGk5qNfT46OTho-2oP9iGc',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW"),
      //   symbol: 'SLIM',
      //   name: 'Solanium',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/xxxxa1sKNGwFtw2kFn8XauW9xq8hBZ5kVtcSesTT9fW/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("J2LWsSXx4r3pYbJ1fwuX5Nqo7PPxjcGPpUb2zHNadWKa"),
      //   symbol: 'DPLN',
      //   name: 'DePlan',
      //   logo: 'https://jprwutcw237zskmqfiyq72df2gx3o4r3imjdd2dx4ygfvyt524ua.arweave.net/S-NqTFbW_5kpkCoxD-hl0a-3cjtDEjHod-YMWuJ91yg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("6nuaX3ogrr2CaoAPjtaKHAoBNWok32BMcRozuf32s2QF"),
      //   symbol: 'abBUSD',
      //   name: 'Wrapped BUSD (Allbridge from BSC)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("63LfDmNb3MQ8mw9MtZ2To9bEA2M71kZUUGq5tiJxcqj9"),
      //   symbol: 'GIGA',
      //   name: 'GIGACHAD',
      //   logo: 'https://bafybeifiyvpbr3kd6wepax4qxdlxbjrpz2de4lqsuwwuihirvaal6kqwba.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("8JnNWJ46yfdq8sKgT1Lk4G7VWkAA8Rhh7LhqgJ6WY41G"),
      //   symbol: 'SOLI',
      //   name: 'Solana Ecosystem Index',
      //   logo: 'https://cdn.lima.amun.com/solana/8jnnwj46yfdq8skgt1lk4g7vwkaa8rhh7lhqgj6wy41g.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9AGm8DWXiB4PwvH1V2r31ChsTE2f2TDySvDbfJmfaMBq"),
      //   symbol: 'DLP8',
      //   name: 'DLP8 Coin',
      //   logo: 'https://arweave.net/T2RURwcLfB2xSjrfksI7R2SL3fKyZoqlTPiLCE3fsBo',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("vSoLxydx6akxyMD9XEcPvGYNGq6Nn66oqVb3UkGkei7"),
      //   symbol: 'vSOL',
      //   name: 'The Vault',
      //   logo: 'https://cloudflare-ipfs.com/ipfs/bafkreig55mf3lazzbgndiqyqvdmchdsykvvebww7cqlws6ywgog5xfdzta',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3acxNNmfdKKZj9i35P4VDBFm74Ufdt8ojKWceVGynwC5"),
      //   symbol: 'GM',
      //   name: 'GM',
      //   logo: 'https://arweave.net/jhNqKLDDC2ZtanzmFt-OZZJLFEYRpzus3rzhl7MGiOU',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("8c71AvjQeKKeWRe8jtTGG1bJ2WiYXQdbjqFbUfhHgSVk"),
      //   symbol: '$GARY',
      //   name: 'GARY',
      //   logo: 'https://raw.githubusercontent.com/puresec-ng/gary/main/GARY_coin.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CKaKtYvz6dKPyMvYq9Rh3UBrnNqYZAyd7iF4hJtjUvks"),
      //   symbol: 'GARI',
      //   name: 'Gari',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CKaKtYvz6dKPyMvYq9Rh3UBrnNqYZAyd7iF4hJtjUvks/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("aYZPYgohjK6LYM8o1v6pnr3ZinhuRzSHd6TRDVDUBkK"),
      //   symbol: 'BTL',
      //   name: 'BitLegacy Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/aYZPYgohjK6LYM8o1v6pnr3ZinhuRzSHd6TRDVDUBkK/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT"),
      //   symbol: 'UXD',
      //   name: 'UXD Stablecoin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7kbnvuGBxxj8AG9qp8Scn56muWGaRaFqxg1FsRp3PaFT/uxd-icon-black.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("Aqjju8gCv3Uc2XsmF5x92ZarDo3hCnP7EgUeDkv1i7jK"),
      //   symbol: 'CROCHET',
      //   name: 'Crochet World',
      //   logo: 'https://image-cdn.solana.fm/images/?imageUrl=https://bafkreiegq57dmupyttnl6m3atkxd6zrpdy2gchal27gkkqttyqi5i3upmy.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AGyUuFvYGnUUXWG6GUKga4B3MGmBuEZ9hGqY73n76XpJ"),
      //   symbol: 'HOOD',
      //   name: 'wagmicatgirlkanye420etfmoon1000x',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/HOOD_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("45wdSjpSqZCk9mkqmq5Nh7beCEqqUJMJcVduwYCip5eq"),
      //   symbol: 'BOFB',
      //   name: 'BofB',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/45wdSjpSqZCk9mkqmq5Nh7beCEqqUJMJcVduwYCip5eq/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("GHtLF7drbYXGTHX73uSxqPKkJUzDqcBNe2M9fzjJzr3j"),
      //   symbol: 'STSHIP',
      //   name: 'StarShip🚀',
      //   logo: 'https://gateway.irys.xyz/JUL1T_9NFtLEDZGtY-4pKopYplV7bszLhp5pCl2fKzc',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk"),
      //   symbol: 'BLOCK',
      //   name: 'Blockasset',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/NFTUkR4u7wKxy9QLaX2TGvd9oZSWoMo4jqSJqdMb7Nk/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4MPA8WbyYtKiufXDSdckEoMPdN5XK1Xw9S9LSLMjK5Y4"),
      //   symbol: 'Wojak',
      //   name: 'Wojak',
      //   logo: 'https://i.bb.co/PDkqhfK/wojak-logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("KARTdF5K68Q2nGppizG3DeCzp7AhHy6YXf2uTQjBSQx"),
      //   symbol: 'VROOM',
      //   name: 'Mushroom Racers Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/KARTdF5K68Q2nGppizG3DeCzp7AhHy6YXf2uTQjBSQx/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("CejQBkdRPN8Jyod2jVUYTfHwU9hPHvM3rD9prvQiffDU"),
      //   symbol: 'TAP',
      //   name: 'TAP Coin',
      //   logo: 'https://arweave.net/gHPUUFpbtWac5AnYtV10nGXa3VBgu0PgBiA7gDHJkJE',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DMvsB8cjKXDQJs8cvoDtKxX7KEMVeZ31KzycszuinJUY"),
      //   symbol: 'HASUKI',
      //   name: 'Hasuki',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/hasuki_pfp_1664008129191.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("E3tHHRa9Y1TWAA1nPZo8FAyVFgBDnXrS8u8nmMShL3M3"),
      //   symbol: 'CRAMER',
      //   name: 'Cramer Coin (Wormhole)',
      //   logo: 'https://i.imgur.com/6ERdMOo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("5s4BYUXLuvs9ZcVDTxkTpKhThWFSpaU8GG55q2iySe2N"),
      //   symbol: 'ENRX',
      //   name: 'Enrex',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5s4BYUXLuvs9ZcVDTxkTpKhThWFSpaU8GG55q2iySe2N/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("J3NKxxXZcnNiMjKw9hYb2K4LUxgwB6t1FtPtQVsv3KFr"),
      //   symbol: 'SPX',
      //   name: 'SPX6900',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SPX6900_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("5sM9xxcBTM9rWza6nEgq2cShA87JjTBx1Cu82LjgmaEg"),
      //   symbol: 'BMBO',
      //   name: 'Bamboo',
      //   logo: 'https://raw.githubusercontent.com/rishkumaria/bamboo/main/bamboo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9TVjnzpF3X8DHsfVqYWoCGphJxtGYh1PDCFN5QmsHW5t"),
      //   symbol: 'MDS',
      //   name: 'Midas',
      //   logo: 'https://arweave.net/DcmraYTxxarO5sZ1fIKdPIo1f76lRMZB_-q7y1d3Qqw',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Ce3PSQfkxT5ua4r2JqCoWYrMwKWC5hEzwsrT9Hb7mAz9"),
      //   symbol: 'DATE',
      //   name: 'SolDate(DATE) Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Ce3PSQfkxT5ua4r2JqCoWYrMwKWC5hEzwsrT9Hb7mAz9/DATE.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HmLspvjpQtQEnArUyJoBSFGS38gNJwBuxAeqSV9SZ66K"),
      //   symbol: 'RARE',
      //   name: 'RARE',
      //   logo: 'https://raw.githubusercontent.com/SuperRareBears/srb-assets/main/tokens/rare/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BLZEEuZUBVqFhj8adcCFPJvPVCiCyVmh3hkJMrU8KuJA"),
      //   symbol: 'BLZE',
      //   name: 'Blaze',
      //   logo: 'https://solblaze.org/assets/blze.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HysWcbHiYY9888pHbaqhwLYZQeZrcQMXKQWRqS7zcPK5"),
      //   symbol: 'AXSet',
      //   name: 'Axie Infinity Shard (Portal from Ethereum)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/AXSet_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("FUCKuTfQVT9yCe3jPXdejBPhcPJpnceQy17uvcT9cLx8"),
      //   symbol: 'white',
      //   name: 'White Solana',
      //   logo: 'https://raw.githubusercontent.com/loufly1/Birdies/main/photo1697130653.jpeg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("7JnHPPJBBKSTJ7iEmsiGSBcPJgbcKw28uCRXtQgimncp"),
      //   symbol: 'Orbs',
      //   name: 'Orbs',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7JnHPPJBBKSTJ7iEmsiGSBcPJgbcKw28uCRXtQgimncp/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("4ynyx6BzY2XGFgjjun9Cruj1bSRo8FLsAqNnPsW6jDsu"),
      //   symbol: 'EGG',
      //   name: 'EGG',
      //   logo: 'https://gateway.irys.xyz/ar31vqcXlnD4hN5WZ5ha2xnKmYtMv9YXEtLY4BEpJxs',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FANTafPFBAt93BNJVpdu25pGPmca3RfwdsDsRrT3LX1r"),
      //   symbol: 'FANT',
      //   name: 'Phantasia',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FANTafPFBAt93BNJVpdu25pGPmca3RfwdsDsRrT3LX1r/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("AYtg18TFRQs1mCQ29zWY3aSwxwTcW1uTdZ65dL3WiBQu"),
      //   symbol: 'CLAY',
      //   name: 'Claynosaurz',
      //   logo: 'https://i.imgur.com/dd9tpCS.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("6DNSN2BJsaPFdFFc1zP37kkeNe4Usc1Sqkzr9C9vPWcU"),
      //   symbol: 'TBTC',
      //   name: 'Threshold Bitcoin',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/TBTC_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("AK87oZM8ovFU14bq8mu4ufi5zsCPDbqqVvh5b6WHbUdL"),
      //   symbol: '$TIPS',
      //   name: 'Just The Tip',
      //   logo: 'https://justthetipvip.com/wp-content/uploads/2024/02/comp-header.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4vMsoUT2BWatFweudnQM1xedRLfJgJ7hswhcpz4xgBTy"),
      //   symbol: 'HONEY',
      //   name: 'HONEY',
      //   logo: 'https://hivemapper-marketing-public.s3.us-west-2.amazonaws.com/Hivemapper_HONEY_token.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9iLH8T7zoWhY7sBmj1WK9ENbWdS1nL8n9wAxaeRitTa6"),
      //   symbol: 'USH',
      //   name: 'Hedge USD',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9iLH8T7zoWhY7sBmj1WK9ENbWdS1nL8n9wAxaeRitTa6/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ELXRYrf8wd4DcyXDU9QPnMdD8jn2twg7o7qEtf5z2GBW"),
      //   symbol: 'ELIXIR',
      //   name: 'ELIXIR',
      //   logo: 'https://raw.githubusercontent.com/zaptors/image/main/elixir.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("strng7mqqc1MBJJV6vMzYbEqnwVGvKKGKedeCvtktWA"),
      //   symbol: 'strongSOL',
      //   name: 'Stronghold LST',
      //   logo: 'https://shdw-drive.genesysgo.net/CqCTE2k6ext17JLE7EFk6pXAznS7m1rLJaN9nHxUAwpc/stronghold.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DMbb79fgxR3fKKVKWcbetMCuxNNtJnfjY3qqAE4G4wJf"),
      //   symbol: 'DUSK',
      //   name: 'Dusk',
      //   logo: 'https://firebasestorage.googleapis.com/v0/b/mom-prod-625e5.appspot.com/o/TokensNoBG%2FDusk_Coin_INV.png?alt=media&token=66709e38-8d35-40b0-8c0d-9499372f421f',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("BRLsMczKuaR5w9vSubF4j8HwEGGprVAyyVgS4EX7DKEg"),
      //   symbol: 'CYS',
      //   name: 'Cykura',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BRLsMczKuaR5w9vSubF4j8HwEGGprVAyyVgS4EX7DKEg/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GZL4yjPohDShW4RofJ6dEWu2Fv7qEa5mBT7Dpje5hqe7"),
      //   symbol: 'SAC',
      //   name: 'Stoned Ape Crew',
      //   logo: 'https://dl.airtable.com/.attachmentThumbnails/483970a827af847e0b031c7d90d70baf/6cc644f1',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("FwfrwnNVLGyS8ucVjWvyoRdFDpTY8w6ACMAxJ4rqGUSS"),
      //   symbol: 'MMOSH',
      //   name: 'MMOSH: The Stoked Token',
      //   logo: 'https://shdw-drive.genesysgo.net/7nPP797RprCMJaSXsyoTiFvMZVQ6y1dUgobvczdWGd35/MMoshCoin.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GKNr1Gwf7AMvEMEyMzBoEALVBvCpKJue9Lzn9HfrYYhg"),
      //   symbol: 'SIXY',
      //   name: '611Coin',
      //   logo: 'https://raw.githubusercontent.com/dc215007/611/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun"),
      //   symbol: 'pBTC',
      //   name: 'pBTC (Parrot BTC)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DYDWu4hE4MN3aH897xQ3sRTs5EAjJDmQsKLNhbpUiKun/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("n54ZwXEcLnc3o7zK48nhrLV4KTU5wWD4iq7Gvdt5tik"),
      //   symbol: 'PEEP',
      //   name: 'Peepo',
      //   logo: 'https://zk3y35n3ess4i2a4ya5a6hcllkelztul6a5vm2hk7wfjlq7fgypa.arweave.net/yreN9bskpcRoHMA6DxxLWoi8zovwO1Zo6v2KlcPlNh4',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4wjPQJ6PrkC4dHhYghwJzGBVP78DkBzA2U3kHoFNBuhj"),
      //   symbol: 'LIQ',
      //   name: 'LIQ Protocol',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4wjPQJ6PrkC4dHhYghwJzGBVP78DkBzA2U3kHoFNBuhj/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("5hmf8Jt9puwoqiFQTb3vr22732ZTKYRLRw9Vo7tN3rcz"),
      //   symbol: 'BABY',
      //   name: 'Baby',
      //   logo: 'https://photos.pinksale.finance/file/pinksale-logo-upload/1709065389877-8334609f627697b59fa95b3f76dc5f39.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("PRT88RkA4Kg5z7pKnezeNH4mafTvtQdfFgpQTGRjz44"),
      //   symbol: 'PRT',
      //   name: 'PRT (Parrot Protocol)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRT88RkA4Kg5z7pKnezeNH4mafTvtQdfFgpQTGRjz44/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("5goWRao6a3yNC4d6UjMdQxonkCMvKBwdpubU3qhfcdf1"),
      //   symbol: 'USDTpo',
      //   name: 'Tether USD (PoS) (Portal from Polygon)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTpo_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("jucy5XJ76pHVvtPZb5TKRcGQExkwit2P5s4vY8UzmpC"),
      //   symbol: 'jucySOL',
      //   name: 'Juicy SOL',
      //   logo: 'https://shdw-drive.genesysgo.net/5ohvXVJ7f3HxnwYGnXKdECWC3KFcU95dHu7S7x69Y1sA/logo_rev.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("J9nsngni1Pavf4ijP4R9QBaD1yEzKzzUQ1vVgcDQT18J"),
      //   symbol: 'POLYGONE',
      //   name: 'Polygone on SOL',
      //   logo: 'https://bafkreidlnj7ne4bnygpn45x2k464vw7xzudib3vtecqwkczo4adbcnn2sm.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("8j3hXRK5rdoZ2vSpGLRmXtWmW6iYaRUw5xVk4Kzmc9Hp"),
      //   symbol: 'SHARDS',
      //   name: 'SolChicks Shards',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8j3hXRK5rdoZ2vSpGLRmXtWmW6iYaRUw5xVk4Kzmc9Hp/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5RDHUiwLChkKfusxeu9kEDUtRfxsDWV8etoopnZMwVM7"),
      //   symbol: 'WSBS',
      //   name: 'Wall Street Bets Solana',
      //   logo: 'https://bafybeibvap6pkovsxqf2jpkbh4faaz7cifefmvcozs3v4ev475zv5m2mjq.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("yPRTUpLDftNej7p6QofNYgRArRXsm6Mvkzohj4bh4WM"),
      //   symbol: 'yPRT',
      //   name: 'yPRT (Parrot Yield Token)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/yPRTUpLDftNej7p6QofNYgRArRXsm6Mvkzohj4bh4WM/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4tJZhSdGePuMEfZQ3h5LaHjTPsw1iWTRFTojnZcwsAU6"),
      //   symbol: 'ELU',
      //   name: 'Elumia Crowns',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4tJZhSdGePuMEfZQ3h5LaHjTPsw1iWTRFTojnZcwsAU6/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("49c7WuCZkQgc3M4qH8WuEUNXfgwupZf1xqWkDQ7gjRGt"),
      //   symbol: 'SAND',
      //   name: 'The Sandbox (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SAND_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("7rrJLRar2WjZwRoF3iJKHKnA7d7d9YJT1X9HAJnwUH3Z"),
      //   symbol: 'WIZE',
      //   name: 'Project Wisdom',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7rrJLRar2WjZwRoF3iJKHKnA7d7d9YJT1X9HAJnwUH3Z/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("AoN2z7w7ccQJQiWS7rjS45dcyYkVkBddXDcrzmj69tqf"),
      //   symbol: 'ROBERT',
      //   name: 'Robert',
      //   logo: 'https://raw.githubusercontent.com/scoops0/Robert-Logo/main/Robert%20Logo.webp',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("5MAYDfq5yxtudAhtfyuMBuHZjgAbaS9tbEyEQYAhDS5y"),
      //   symbol: 'ACS',
      //   name: 'Access Protocol',
      //   logo: 'https://ap-staging.fra1.digitaloceanspaces.com/1663691449945',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("BgqjQdnnjRtcELAgkYpfKAxWRqSReWercDdRTH6uLoer"),
      //   symbol: 'DORKL',
      //   name: 'ᗪOᖇK ᒪOᖇᗪ',
      //   logo: 'https://bafkreicufnhs5evfdochjopzpjaeuxoh5s6uhyl54dlfeb2cm4bqjfi4dq.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("6gnCPhXtLnUD76HjQuSYPENLSZdG8RvDB1pTLM5aLSJA"),
      //   symbol: 'BSKT',
      //   name: 'Basket',
      //   logo: 'https://gateway.irys.xyz/69o2b3_ekRo4nosnyyXc9piS7d7-8u-h7MNviNzXFYA',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("eqKJTf1Do4MDPyKisMYqVaUFpkEFAs3riGF3ceDH2Ca"),
      //   symbol: 'apUSDC',
      //   name: 'Wrapped USDC (Allbridge from Polygon)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("EwxNF8g9UfmsJVcZFTpL9Hx5MCkoQFoJi6XNWzKf1j8e"),
      //   symbol: 'acUSD',
      //   name: 'Wrapped CUSD (Allbridge from Celo)',
      //   logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/7236.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HLwEJQVzs7SvjXuXpBTRHaLp5S6uWoWTUhLjJxBfy1c7"),
      //   symbol: 'LAPTOP',
      //   name: "Hunter Biden's Laptop",
      //   logo: 'https://arweave.net/X_bM80bdYSZCCW_PaAZFO8JgVsHhq1jBYRUr60yME4o',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("CgnTSoL3DgY9SFHxcLj6CgCgKKoTBr6tp4CPAEWy25DE"),
      //   symbol: 'cgntSOL',
      //   name: 'Cogent SOL',
      //   logo: 'https://cogent-cogs.s3.us-west-2.amazonaws.com/cgntSOL.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EjmyN6qEC1Tf1JxiG1ae7UTJhUxSwk1TCWNWqxWV4J6o"),
      //   symbol: 'DAI',
      //   name: 'DAI (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/DAI_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("ASTRALvKjGK2xk2pamjMBU5dav5cEQa6zpKCP6FZ7BAJ"),
      //   symbol: 'ASTRALIS',
      //   name: 'ASTRALIS',
      //   logo: 'https://shdw-drive.genesysgo.net/AcG1tjtJ3vR1XzSCcVArheGLrwmMsphqExa6VodLymGF/astralis_1500x1500_8bit.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("Ee1pKgTQmP5xjYQs76HmRM2c2YkqEdc9tk5mQbiGFigT"),
      //   symbol: 'MBC',
      //   name: 'Mad Bears Club',
      //   logo: 'https://arweave.net/7jp6IaYj-kCiCDuHzk-zJLf2wRctrhIa1m_PO0rQuig',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CgzdCjj5YNH51uFfQftFbuJKMrwgdWheVjwqjU84MV8y"),
      //   symbol: ' EVERMOON',
      //   name: 'Evermoon',
      //   logo: 'https://bafkreig3cc53og7bvr5yrvfunbws7nyjqezrw22jsrddti2sdajcpswziq.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("fueL3hBZjLLLJHiFH9cqZoozTG3XQZ53diwFPwbzNim"),
      //   symbol: 'FUEL',
      //   name: 'Fuel',
      //   logo: 'https://storage.googleapis.com/nft-assets/items/FUEL.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("RUpbmGF6p42AAeN1QvhFReZejQry1cLkE1PUYFVVpnL"),
      //   symbol: 'EPEP',
      //   name: 'Epep',
      //   logo: 'https://ipfs.io/ipfs/QmQHhrbf5g3TkpYH5UYBjoXYY83EzA7cq9SZHR4sGmToN5',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("8Nd3TZJfxt9yYKiPiPmYp6S5DhLftG3bwSqdW3KJwArb"),
      //   symbol: 'SPOODY',
      //   name: 'Spodermen',
      //   logo: 'https://raw.githubusercontent.com/deeeeeeeeeeeeeev/spodermen/main/spoody_logo.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("3Tnv2xxSpLDQ1hfRLjWWPYz7vHPWoE5fsCPoG31EwTtv"),
      //   symbol: 'RFKJ',
      //   name: 'Independence Token (Wormhole)',
      //   logo: 'https://drive.google.com/file/d/1uZg6SCrubSxTYrulWRXD70d5__Y4zPzH/view?usp=drive_link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("8FU95xFJhUUkyyCLU13HSzDLs7oC4QZdXQHL6SCeab36"),
      //   symbol: 'UNI',
      //   name: 'Uniswap (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/UNI_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("Zippybh3S5xYYam2nvL6hVJKz1got6ShgV4DyD1XQYF"),
      //   symbol: 'zippySOL',
      //   name: 'Zippy Staked SOL',
      //   logo: 'https://www.zippystake.org/mint.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Bg9CZr1CmVoCn2uNWwj9f5rLbmfYRYvcVikCRCwawUwR"),
      //   symbol: 'kenidy',
      //   name: 'ruburt f kenidy jr',
      //   logo: 'https://ipfs.io/ipfs/QmdvV2btGAz4EkwHV8oH78KC7KxqtHXrUbnw47B8M56yKT',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AJd5bi9wK4GupVf9XeftfrzQraQVthErLxEtdHv5qEHU"),
      //   symbol: 'SMOLCAT',
      //   name: 'Smol Cat',
      //   logo: 'https://bafkreigvfvqnfq7wvned2hbt6esd55iefkck2o7oookiyklgvmd2fmduzi.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1"),
      //   symbol: 'sUSDC-9',
      //   name: 'Saber Wrapped USD Coin (9 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/JEFFSQ3s8T3wKsvp4tnRAsUBW7Cqgnf8ukBZC4C8XBm1/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CvB1ztJvpYQPvdPBePtRzjL4aQidjydtUz61NWgcgQtP"),
      //   symbol: 'EPCT',
      //   name: 'Epics Token',
      //   logo: 'https://bafybeibal7k2hz6frznyjbl4qcnzcwlsuzxmquatrsaly6ttmuppgmdvwe.ipfs.dweb.link/EpicsCoin.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7SZUnH7H9KptyJkUhJ5L4Kee5fFAbqVgCHvt7B6wg4Xc"),
      //   symbol: 'SDO',
      //   name: 'TheSolanDAO',
      //   logo: 'https://thesolandao.com/logohero.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("B4cYZYVYeHgLc3W1pCduCYkoS75G6roPaPdPoBCFweNJ"),
      //   symbol: 'COL',
      //   name: 'Colana',
      //   logo: 'https://www.arweave.net/hj3JN-bVGRs0ytJmxtXkL3vswXnPHfRAGOUNTNyyg8g',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("7V5AaqHTwiySegaAmNPLekQfTAoK4WvEVgfi2R8V44tB"),
      //   symbol: 'rFRAKT',
      //   name: 'Random FRAKTs',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7V5AaqHTwiySegaAmNPLekQfTAoK4WvEVgfi2R8V44tB/rFRAKT.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("nBZEcHSG771mRbi4y2sSgKjfDUH8jsM2Eo5fNcASLeU"),
      //   symbol: 'ZOOMER',
      //   name: 'ZOOMER (Wormhole)',
      //   logo: 'https://assets.coingecko.com/coins/images/30894/large/zoooooooooomer.jpg?1696529740',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("BLwTnYKqf7u4qjgZrrsKeNs2EzWkMLqVCu6j8iHyrNA3"),
      //   symbol: 'BOP',
      //   name: 'Boring Protocol',
      //   logo: 'https://raw.githubusercontent.com/boringprotocol/brand-assets/main/boplogo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("CUwif1FiX5b3bwwb2n5Bm35AixvnR8LJjGUVmEwNZNgR"),
      //   symbol: 'SOLY',
      //   name: 'Solamander',
      //   logo: 'https://img.solyonsol.io/soly.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9dwPiStDBwJJqC3QzMnjpJP7xohZbMVmHELFx3uy3KRq"),
      //   symbol: 'NVDA',
      //   name: 'NVIDIA',
      //   logo: 'https://pbs.twimg.com/profile_images/1760839132958642176/nq18MRdb_400x400.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6ABQdaTwRvmacto7aeRBGghS6Pxctd6cFGL8gDdwV1dd"),
      //   symbol: 'XTR',
      //   name: 'Extra Reality',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6ABQdaTwRvmacto7aeRBGghS6Pxctd6cFGL8gDdwV1dd/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("Pz1b7iALFqzsgdL9ca6P3NZvTXwSF1koaQqnNohVFcT"),
      //   symbol: 'GARF',
      //   name: 'Garf',
      //   logo: 'https://pbs.twimg.com/profile_images/1770950513913139200/7WTpGIxH_400x400.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FaxYQ3LVXP51rDP2yWGLWVrFAAHeSdFF8SGZxwj2dvor"),
      //   symbol: 'SWAG',
      //   name: 'swag coin',
      //   logo: 'https://lhh47k2s4fcnzgbccwh537aja2wpu7adocuilfh2fq465lfuttaq.arweave.net/Wc_Pq1LhRNyYIhWP3fwJBqz6fANwqIWU-iw57qy0nME',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("F6weWmuc1vwdL4u38Ro9jKXHEMjP9BoNdWMF5o5TvtJf"),
      //   symbol: 'SOUL',
      //   name: 'SOUL',
      //   logo: 'https://arweave.net/ipj9IdEAQAXt0LS6lOt7jQY7W4iazsVFBkN60U7M4iQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("D8TFo4FsDF9CnejkezEZtwdhdmwaiNgLRDAQUTwWQuBU"),
      //   symbol: '$TEST',
      //   name: 'TEST',
      //   logo: 'https://bafkreia7lr4higfpv6xc5owc3m2vjgcq2zzb7nqoaeut2lqcfy4pplpy5u.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FYUkUybywqUUyrUwiAezbvhTp2DUgx1eg8tQNiKkXqJ9"),
      //   symbol: 'MC',
      //   name: 'Magic Crystal Coin',
      //   logo: 'https://arweave.net/Nwami1xs2ciMI7mUcawKMkUTKf_UUrLjYvIqUSL1ShI',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Bn113WT6rbdgwrm12UJtnmNqGqZjY4it2WoUQuQopFVn"),
      //   symbol: 'aeUSDT',
      //   name: 'Wrapped USDT (Allbridge from Ethereum)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("LAinEtNLgpmCP9Rvsf5Hn8W6EhNiKLZQti1xfWMLy6X"),
      //   symbol: 'laineSOL',
      //   name: 'Laine Stake',
      //   logo: 'https://shdw-drive.genesysgo.net/4DUkKJB966oMk8zq57KkAUxqg9HpuWtZ3BKobhmYph39/laineSOL.webp',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS"),
      //   symbol: 'PAI',
      //   name: 'PAI (Parrot USD)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Ea5SjE2Y6yvCeW5dYTn7PYMuW5ikXkvbGdcmSnXeaLjS/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("E7BGDtpNXUTqPNbZxKHiLowgLddiAeuKcByD7tSnfYWD"),
      //   symbol: 'GEM',
      //   name: 'GEM',
      //   logo: 'https://bafkreifpm7rbwohp4yys2guyibfzqbctu3bist6zetmyq456om2rqvk544.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("FtVugRqBcn5gakjzfDyA3Spms63fYDAbhke1YAFgLgLB"),
      //   symbol: 'COINFRA',
      //   name: 'Coinfra Samurai',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/coinfra_samurai_pfp_1662121480181.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("GkDg1ZfoFkroLAwLqtJNXhxCDg8gmKxHAGxSUZagYFfE"),
      //   symbol: 'SOL100',
      //   name: 'SOL100',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GkDg1ZfoFkroLAwLqtJNXhxCDg8gmKxHAGxSUZagYFfE/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("sRLY3migNrkC1HLgqotpvi66qGkdNedqPZ9TJpAQhyh"),
      //   symbol: 'sRLY',
      //   name: 'sRLY (Rally Solana)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("seedEDBqu63tJ7PFqvcbwvThrYUkQeqT6NLf81kLibs"),
      //   symbol: 'SEEDED',
      //   name: 'Seeded Network',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/seedEDBqu63tJ7PFqvcbwvThrYUkQeqT6NLf81kLibs/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GFX1ZjR2P15tmrSwow6FjyDYcEkoFb4p4gJCpLBjaxHD"),
      //   symbol: 'GOFX',
      //   name: 'GooseFX',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GFX1ZjR2P15tmrSwow6FjyDYcEkoFb4p4gJCpLBjaxHD/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y"),
      //   symbol: 'PORT',
      //   name: 'Port Finance Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PoRTjZMPXb9T7dyU7tpLEZRQj7e6ssfAE62j2oQuc6y/PORT.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("5KV2W2XPdSo97wQWcuAVi6G4PaCoieg4Lhhi61PAMaMJ"),
      //   symbol: 'GU',
      //   name: 'Kugle GU',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5KV2W2XPdSo97wQWcuAVi6G4PaCoieg4Lhhi61PAMaMJ/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DK6PWMyuZ4NMjsm9AWNCTMKrajQYrtfMjMJ3QauX2UH5"),
      //   symbol: 'BITXBIT',
      //   name: 'BITXBIT',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DK6PWMyuZ4NMjsm9AWNCTMKrajQYrtfMjMJ3QauX2UH5/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9CPWiCFL11DWr92dsTrzLf5cKz6zKhLz3xzRcYCQ3Nd2"),
      //   symbol: 'UPT',
      //   name: 'UPTOBER',
      //   logo: 'https://bafkreihgs65erm5f45s5vzl7y6wdl3nuqqqpcvlith3sotor5jcctft2wu.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("BQ74oddoJCJKz9W4QaDzLFh1JvLbmXRCvdaC65P7anex"),
      //   symbol: 'SIUUU',
      //   name: 'crustieno renaldo',
      //   logo: 'https://i.ibb.co/wKQYQgX/11.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DZvuAtqMdWzDHMGDpTkRmW2QBxstjCNTcobMDMpVuRDa"),
      //   symbol: 'PIZZA',
      //   name: 'COSTCO PIZZA',
      //   logo: 'https://gateway.irys.xyz/DMy8cbi1T5k-1dMUyT2TaGGmV_UHvz5D9whcItR706I',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("5WWRMYPchxgh3VmYGPqoq2kfzCtBLxXB9vFH2TeFeR9m"),
      //   symbol: 'TPC',
      //   name: 'TOYPOODLE COIN',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5WWRMYPchxgh3VmYGPqoq2kfzCtBLxXB9vFH2TeFeR9m/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("HxPoEHMt1vKeqjKCePcqTj6yYgn6Xqq1fKTY3Pjx4YrX"),
      //   symbol: 'ZAP',
      //   name: 'ZAP Token',
      //   logo: 'https://www.zap.org/static/zapSplash.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("E43qU77tnWDwN11o7TtaGMNpxCAqz8RZEZ7PcTCUXSim"),
      //   symbol: 'SLO',
      //   name: 'SmoLanO',
      //   logo: 'https://img.fotofolio.xyz/?url=https%3A%2F%2Farweave.net%2F2SMzEgv4IqPaiTkKe09CLodbOWbiC2rmIKRzgkFsFNs',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HUBsveNpjo5pWqNkH57QzxjQASdTVXcSK7bVKTSZtcSX"),
      //   symbol: 'hubSOL',
      //   name: 'SolanaHub staked SOL',
      //   logo: 'https://shdw-drive.genesysgo.net/AHzrxKBP6fkj6sozaZ2uzv6nniJLRFnZNZQ6rEPfZM5E/hub.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("J3hxVJtn3kGtr1tHkJSWXvMr2D4M8iBzxzB75zywxVzF"),
      //   symbol: 'ABULL',
      //   name: 'AumentoBULL',
      //   logo: 'https://api.degencdn.com/v1/nfts/J3hxVJtn3kGtr1tHkJSWXvMr2D4M8iBzxzB75zywxVzF/image.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FanJWA4yEVUJj1r83tR7XybxmDGF6bNH8M81ag9aeUbF"),
      //   symbol: 'BMT',
      //   name: 'BMT',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FanJWA4yEVUJj1r83tR7XybxmDGF6bNH8M81ag9aeUbF/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ASNR8RxZ3wK8QiNxmVEvxXtFGCXCHRD8oiAaNihHJvLq"),
      //   symbol: 'CDC',
      //   name: 'Cat Driving a Car',
      //   logo: 'https://bafkreibckqkthhqv4kmbgpe564agczidyfncwk2wsplztizdppdnob3ipi.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3ag1Mj9AKz9FAkCQ6gAEhpLSX8B2pUbPdkb9iBsDLZNB"),
      //   symbol: 'HONK',
      //   name: 'Honk',
      //   logo: 'https://bafkreia5nmyxbrxshpiebsakviidhkfuoevpcyzonwov7bmaovce5ekzym.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX"),
      //   symbol: 'wBUSD_v1',
      //   name: 'Binance USD (Wormhole v1)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AJ1W9A9N9dEMdVyoDiam2rV44gnBm2csrPDP7xqcapgX/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HfQuaLjMguh7vyZqqrWuVqpsjQd7tAPrzBWKqA3pDTH3"),
      //   symbol: 'JENSEN',
      //   name: 'JENSEN HUANG',
      //   logo: 'https://i.ibb.co/k5TC2w0/JENSEEEEN.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FkCaFsprX7gySagFoQPHNbe9MRkjrvh21cokJo6C1e2T"),
      //   symbol: 'JEFF',
      //   name: 'JEFF',
      //   logo: 'https://arweave.net/Pi-s2vzZT8pfYVvFbNjgC0kSrW45PXb1_VPb5HoHuyI',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("6FLsSkF4AqQeDuqEmGPyBZvVebc4WWWntnZP2QZyBzG8"),
      //   symbol: 'JJJJC',
      //   name: 'JJC',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6FLsSkF4AqQeDuqEmGPyBZvVebc4WWWntnZP2QZyBzG8/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8s9FCz99Wcr3dHpiauFRi6bLXzshXfcGTfgQE7UEopVx"),
      //   symbol: 'CKC',
      //   name: 'ChikinCoin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8s9FCz99Wcr3dHpiauFRi6bLXzshXfcGTfgQE7UEopVx/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9zoqdwEBKWEi9G5Ze8BSkdmppxGgVv1Kw4LuigDiNr9m"),
      //   symbol: 'STR',
      //   name: 'Solster',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9zoqdwEBKWEi9G5Ze8BSkdmppxGgVv1Kw4LuigDiNr9m/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EdAhkbj5nF9sRM7XN7ewuW8C9XEUMs8P7cnoQ57SYE96"),
      //   symbol: 'FAB',
      //   name: 'FABRIC',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EdAhkbj5nF9sRM7XN7ewuW8C9XEUMs8P7cnoQ57SYE96/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5"),
      //   symbol: 'renBTC',
      //   name: 'renBTC',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CDJWUqTcYTVAKXAVXoQZFes5JUFc7owSeq7eMQcDSbo5/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("25yPcyqSpSv8T2JWyoKKRiU622Sr7LoMk9S3FmuBFt8S"),
      //   symbol: 'GMERS',
      //   name: 'GMers',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/gmers_pfp_1662860639809.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("Eh1fXbAipe4k7CYR9UMb2bbWmBcpU3HcyX3LWuRVFBLz"),
      //   symbol: 'FM',
      //   name: 'Flowmatic',
      //   logo: 'https://nftstorage.link/ipfs/bafybeighw6z7wdbk73tezruawliwt622xic6r43wmzgpk22rsnmqvjvkrm/Brando_logo_of_F_on_a_black_background_in_the_style_of_light_te_42b8cbea-cc40-4c9f-a098-62c381d624df.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("5JnZ667P3VcjDinkJFysWh2K2KtViy63FZ3oL5YghEhW"),
      //   symbol: 'APYS',
      //   name: 'APYSwap',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5JnZ667P3VcjDinkJFysWh2K2KtViy63FZ3oL5YghEhW/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2cJgFtnqjaoiu9fKVX3fny4Z4pRzuaqfJ3PBTMk2D9ur"),
      //   symbol: 'PLD',
      //   name: 'Plutonian DAO',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2cJgFtnqjaoiu9fKVX3fny4Z4pRzuaqfJ3PBTMk2D9ur/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8bXZuG6NVuhdmGeMEjypYZGny48DgpZ68TvkvVTmFDdF"),
      //   symbol: 'SAYLOR',
      //   name: 'Saylor',
      //   logo: 'https://bafybeihsvj7r5hypkjrkayfq5sgh5fz3ef6hpa5wpnfeesmbc52ujjuvue.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3WoatNLfMffazu8aCSmRSdWFngpJQ4GUMFJxtSzoDqau"),
      //   symbol: 'KOW',
      //   name: 'Kowalski',
      //   logo: 'https://bafkreihdkgipc7nho7lix35i54gupf56hpnazx6d5jbqtxtmg34iifefga.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("EJPtJEDogxzDbvM8qvAsqYbLmPj5n1vQeqoAzj9Yfv3q"),
      //   symbol: 'bozoHYBRID',
      //   name: 'Bozo Hybrid',
      //   logo: 'https://bafkreiamobqahwlwio5syavvfkknvfecgt7osbsh2s4xizihgpsajethyy.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("65nTNuJGHme4PQvKQyJykKp1bJAkK4A8Q66sd2yBWugf"),
      //   symbol: 'RBT',
      //   name: 'RIBBIT',
      //   logo: 'https://bafkreia3t3g3ecvvq7i5mgivvelysuhn5s6hzrulxmbkwgj5tgpsjtufge.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("6VNKqgz9hk7zRShTFdg5AnkfKwZUcojzwAkzxSH3bnUm"),
      //   symbol: 'wHAPI',
      //   name: 'Wrapped HAPI',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6VNKqgz9hk7zRShTFdg5AnkfKwZUcojzwAkzxSH3bnUm/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("JACSU5f2fCsQSCDNz1VX2Se4vmQyj8k5EYigD4RppvGV"),
      //   symbol: 'JOEL',
      //   name: 'Joel',
      //   logo: 'https://nftstorage.link/ipfs/bafkreifmylk4pzymdeshz27ui7h53gjaeiamu4oqs5fhacw66ub6uxcbda',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3Ztt53vwGhQGoEp3n1RjSu4CFnGRfqzwo6L8KN8gmXfd"),
      //   symbol: 'METAS',
      //   name: 'METASEER',
      //   logo: 'https://metaseer.io/img/home-one/logo256.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("XwTZraiF1dVh69cZ2SpqyjDLmei2uVps5CYHD9vqK6d"),
      //   symbol: 'BURR',
      //   name: 'Burrito Boyz',
      //   logo: 'https://creator-hub-prod.s3.us-east-2.amazonaws.com/burrito_boyz_pfp_1653394754301.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn"),
      //   symbol: 'JSOL',
      //   name: 'JPOOL Solana Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7Q2afV64in6N6SeZsAAB81TJzwDoD6zpqmHkzi9Dcavn/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2emYMetySwE7Xh6qrG1AwAQ3TDvrLkUSpSZ5AjcWCc7B"),
      //   symbol: 'L',
      //   name: 'Lorm the Worm',
      //   logo: 'https://bafybeihx6vk7furiw5ls3zpw2hoyg6eocrj6ztjce6z6fm3nsnqwfbcwye.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("AmgUMQeqW8H74trc8UkKjzZWtxBdpS496wh4GLy2mCpo"),
      //   symbol: 'TOKE',
      //   name: 'Mycelium McToken',
      //   logo: 'https://arweave.net/kVddfi0QG_NfS_cRQQ0vehEt7n25wVk3O4ilHaeidqY',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt"),
      //   symbol: 'SRM',
      //   name: 'Serum',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SRMuApVNdxXokk5GT7XD5cUUgXMBCoAz2LHeuAoKWRt/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ"),
      //   symbol: 'DUST',
      //   name: 'DUST Protocol',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DUSTawucrTsGU8hcqRdHDCbuYhCPADMLM2VcCb8VnFnQ/logo.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Fishy64jCaa3ooqXw7BHtKvYD8BTkSyAPh6RNE3xZpcN"),
      //   symbol: 'FISHY',
      //   name: 'FISHY by sharky.fi',
      //   logo: 'https://shdw-drive.genesysgo.net/CpRahRvMZad2VNTJDN24m4Bk6PsWRBm14w684RatY1bd/The%20winning%20logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("cxxShYRVcepDudXhe7U62QHvw8uBJoKFifmzggGKVC2"),
      //   symbol: 'CHICKS',
      //   name: 'SolChicks',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/cxxShYRVcepDudXhe7U62QHvw8uBJoKFifmzggGKVC2/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2Ry7AGS1w488LdSxhz2XvSrU1EVUzUGJo27DBP57couh"),
      //   symbol: '$BEN',
      //   name: 'BEN',
      //   logo: 'https://arweave.net/vvRsvtg1dtVxoUL6XNeRp-cOIYp8BRbaDigmuKvLazk',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("5doZSgpsKVJk9u58hsmDsq8N6oNtELvsycoFJ42P327p"),
      //   symbol: 'OGCINU',
      //   name: 'The OG Cheems Inu',
      //   logo: 'https://i.im.ge/2024/03/08/8vC1Br.Profile02Artboard-62x.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2MtPZqwNKTNsBoFCwm4ZTWk3ySz4LSd82ucDGeTk7VNu"),
      //   symbol: 'IVRY',
      //   name: 'Portals',
      //   logo: 'https://dl.airtable.com/.attachmentThumbnails/102af36cc30fec0b05ebb45406f20971/126d0320',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("5K1JtWpdSksVKaL6R2DuLpCDAjzxK6sq2CpXaXDWHVLg"),
      //   symbol: 'YORK',
      //   name: 'Yorkipoo',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5K1JtWpdSksVKaL6R2DuLpCDAjzxK6sq2CpXaXDWHVLg/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FZgL5motNWEDEa24xgfSdBDfXkB9Ru9KxfEsey9S58bb"),
      //   symbol: 'VCC',
      //   name: 'VentureCapital',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FZgL5motNWEDEa24xgfSdBDfXkB9Ru9KxfEsey9S58bb/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DdFPRnccQqLD4zCHrBqdY95D6hvw6PLWp9DEXj1fLCL9"),
      //   symbol: 'aeUSDC',
      //   name: 'Wrapped USDC (Allbridge from Ethereum)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("7UAzn8R4mBfG1foqyL1169Lzd6cSWXYSLQFXYHzsiNQG"),
      //   symbol: 'LOWQ',
      //   name: 'LowQ',
      //   logo: 'https://bafkreianicicf7nez6viem3m3jferpzuegfjjbfvrxmafv572versrnvqy.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4ACuWnJZjE1Q51589mBmmyfD82RZ4LNFVeuPdSRFPc3L"),
      //   symbol: 'GLEEK',
      //   name: 'GLEEK',
      //   logo: 'https://bafkreidxnygbex6dsrdz6xlqhtdzgub3vqrhx36sfzglfmstebktmn24um.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AgnHzGspNu7F3nFM4izuPt5g7m1URjVaTaFNgvqSXcjC"),
      //   symbol: 'NCTR',
      //   name: 'Nectar',
      //   logo: 'https://gateway.irys.xyz/dzNRpOihzq7F4MxL2J_WZbhRF_TOP0_qGz9Ea-312gs',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DMCUFm2ZAnSU7UgsdVq23gRogMU3MEBjPgQF1gK53rEn"),
      //   symbol: 'UM',
      //   name: 'UncleMine',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DMCUFm2ZAnSU7UgsdVq23gRogMU3MEBjPgQF1gK53rEn/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7njsg9BA1xvXX9DNpe5fERHK4zb7MbCHKZ6zsx5k3adr"),
      //   symbol: 'FAM',
      //   name: 'Family',
      //   logo: 'https://dd.dexscreener.com/ds-data/tokens/solana/7njsg9BA1xvXX9DNpe5fERHK4zb7MbCHKZ6zsx5k3adr.png?size=lg&key=188184',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4Njvi3928U3figEF5tf8xvjLC5GqUN33oe4XTJNe7xXC"),
      //   symbol: 'T',
      //   name: 'Threshold Network Token',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/T_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("6VHL2vMKgrF1YQFSv29Rs1pj9VCRK29bD11NtDqerqHA"),
      //   symbol: '$SSHIB',
      //   name: 'SSHIB',
      //   logo: 'https://solshib.space/resources/images/icons/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("3vHSsV6mgvpa1JVuuDZVB72vYbeUNzW4mBxiBftwzHEA"),
      //   symbol: 'FRNT',
      //   name: 'Final Frontier',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3vHSsV6mgvpa1JVuuDZVB72vYbeUNzW4mBxiBftwzHEA/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("isktkk27QaTpoRUhwwS5n9YUoYf8ydCuoTz5R2tFEKu"),
      //   symbol: 'ISKT',
      //   name: 'Rafkróna',
      //   logo: 'https://raw.githubusercontent.com/rafmyntasjodur/iskt-metadata/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("sonarX4VtVkQemriJeLm6CKeW3GDMyiBnnAEMw1MRAE"),
      //   symbol: 'SONAR',
      //   name: 'Sonar Watch',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/sonarX4VtVkQemriJeLm6CKeW3GDMyiBnnAEMw1MRAE/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2VhjJ9WxaGC3EZFwJG9BDUs9KxKCAjQY4vgd1qxgYWVg"),
      //   symbol: 'EUROe',
      //   name: 'EUROe Stablecoin',
      //   logo: 'https://dev.euroe.com/persistent/token-icon/png/256x256.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("E2VmbootbVCBkMNNxKQgCLMS1X3NoGMaYAsufaAsf7M"),
      //   symbol: 'USDCpo',
      //   name: 'USD Coin (PoS) (Portal from Polygon)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCpo_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("AqEHVh8J2nXH9saV2ciZyYwPpqWFRfD2ffcq5Z8xxqm5"),
      //   symbol: 'YAKU',
      //   name: 'Yaku',
      //   logo: 'https://arweave.net/vBuoW86uFsjvQjilInux-5bL8rNI5sbehVBY16KmU5I',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AxaTJdRuuc3626FtPWdQCMcWPH6yzgxXKWbFCZN3TMgy"),
      //   symbol: 'ASV',
      //   name: 'Asvoria',
      //   logo: 'https://bafybeiap2jgce7xki7m6ei2ctkkdwczxgllo3gnueia63c6aipbka3opmu.ipfs.nftstorage.link/asvoria.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GPyzPHuFFGvN4yWWixt6TYUtDG49gfMdFFi2iniTmCkh"),
      //   symbol: 'CHILI',
      //   name: 'CHILI',
      //   logo: 'https://iili.io/H5O87JS.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("5tN42n9vMi6ubp67Uy4NnmM5DMZYN8aS8GeB3bEDHr6E"),
      //   symbol: 'WAG',
      //   name: 'Waggle Network',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5tN42n9vMi6ubp67Uy4NnmM5DMZYN8aS8GeB3bEDHr6E/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("SLCLww7nc1PD2gQPQdGayHviVVcpMthnqUz2iWKhNQV"),
      //   symbol: 'SLCL',
      //   name: 'Solcial token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SLCLww7nc1PD2gQPQdGayHviVVcpMthnqUz2iWKhNQV/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("boooCKXQn9YTK2aqN5pWftQeb9TH7cj7iUKuVCShWQx"),
      //   symbol: 'BOO',
      //   name: 'Boo Network',
      //   logo: 'https://arweave.net/Reo2_w4k9PGdtYX3p8BllNZpSbbIJ-zype0qdbQgsoE',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Fo6tfAkXj74X6j8hati8SxtwZHHcdGeqXVUPLP9Abvqu"),
      //   symbol: 'WALLY',
      //   name: 'Wally The Whale',
      //   logo: 'https://nftstorage.link/ipfs/bafkreiaeqwqeluwwjyrusaofikmi5vivhl65lynym5oruemf7i52wrooyq',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4BzxVoBQzwKoqm1dQc78r42Yby3EzAeZmMiYFdCjeu5Z"),
      //   symbol: 'SWOLE',
      //   name: 'Swole Doge',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4BzxVoBQzwKoqm1dQc78r42Yby3EzAeZmMiYFdCjeu5Z/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ErGB9xa24Szxbk1M28u2Tx8rKPqzL6BroNkkzk5rG4zj"),
      //   symbol: 'FRKT',
      //   name: 'FRAKT Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ErGB9xa24Szxbk1M28u2Tx8rKPqzL6BroNkkzk5rG4zj/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("Basis9oJw9j8cw53oMV7iqsgo6ihi9ALw4QR31rcjUJa"),
      //   symbol: 'BASIS',
      //   name: 'basis',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Basis9oJw9j8cw53oMV7iqsgo6ihi9ALw4QR31rcjUJa/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp"),
      //   symbol: 'FIDA',
      //   name: 'Bonfida',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EchesyfXePKdLtoiZSL8pBe8Myagyy8ZRqsACNCFGnvp/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FUTURETnhzFApq2TiZiNbWLQDXMx4nWNpFtmvTf11pMy"),
      //   symbol: 'FUTURE',
      //   name: 'Future',
      //   logo: 'https://arweave.net/9HRtVucwSCY8fLiHBhiYoqDW9kgjoowdj9dIQfb1oY4?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AebrVZPfSH7KPAxPwnuqTZB9QNepdktk7HSSY4SNj7BM"),
      //   symbol: 'VC',
      //   name: 'Venture Coin',
      //   logo: 'https://arweave.net/6HvW8RLbLhBbw09QDRpPd6HX-N3Sk9kF2vvdaZGHExU',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("foodQJAztMzX1DKpLaiounNe2BDMds5RNuPC6jsNrDG"),
      //   symbol: 'FOOD',
      //   name: 'Food',
      //   logo: 'https://storage.googleapis.com/nft-assets/items/FOOD.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq"),
      //   symbol: 'sRLY',
      //   name: 'Rally (Legacy - deprecated)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/RLYv2ubRMDLcGG2UyvPmnPmkfuQTsMbg4Jtygc7dmnq/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj"),
      //   symbol: 'stSOL',
      //   name: 'Lido Staked SOL',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7dHbWXmci3dT8UFYWYZweBLXgycu7Y3iL6trKn1Y7ARj/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk"),
      //   symbol: 'POLIS',
      //   name: 'Star Atlas DAO',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/poLisWXnNRwC6oBu1vHiuKQzFjGL4XDSu4g9qjz9qVk/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("Fefecfi5DhahY51XqQTP2qjFGhnuoSjrVivL6k9Ercw6"),
      //   symbol: 'DEFI',
      //   name: 'DegenerateFinance69Inu',
      //   logo: 'https://github.com/0xViva/public-assets/blob/main/assets/DefiDogLogo.png?raw=true',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("43m2ewFV5nDepieFjT9EmAQnc1HRtAF247RBpLGFem5F"),
      //   symbol: 'USDK',
      //   name: 'USDK (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDK_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("HKfs24UEDQpHS5hUyKYkHd9q7GY5UQ679q2bokeL2whu"),
      //   symbol: 'TINY',
      //   name: 'TinyBits',
      //   logo: 'https://tinycolony.io/tinycolonytoken.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("BzjsQpgKjxZedFawUV9GZMExhr7VbvsasQv12v2PVxSt"),
      //   symbol: 'BATT',
      //   name: 'BAT',
      //   logo: 'https://batt.finance/static/media/logo.6284c2cd472e1bacd3e5c370044f6a0e.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("pWrSoLAhue6jUxUkbWgmEy5rD9VJzkFmvfTDV5KgNuu"),
      //   symbol: 'pwrSOL',
      //   name: 'Power Staked SOL',
      //   logo: 'https://arweave.net/vmJI1aPZNfTTIWH7ZLFxBP1VK7ptapg1hBukoDDNPME',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3LDAW7enNUZ4DjE1jCi1cDpXvXLrJ1rPiECPbcHpMgG2"),
      //   symbol: 'FEED',
      //   name: 'FEED on ACF Game',
      //   logo: 'https://shop.alienchickenfarm.com/logos/feed-token.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("xALGoH1zUfRmpCriy94qbfoMXHtK6NDnMKzT4Xdvgms"),
      //   symbol: 'xALGO',
      //   name: 'Wrapped ALGO',
      //   logo: 'https://arweave.net/zZizaipiM5GvJ5upulPUzg9VW9bui0VaMCY6k1QyHgs',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FS66v5XYtJAFo14LiPz5HT93EUMAHmYipCfQhLpU4ss8"),
      //   symbol: 'SMOG',
      //   name: 'Smog',
      //   logo: 'https://cloudflare-ipfs.com/ipfs/QmXXiyBNz4PWiP73JicWvQBPvsKJG2uwsvF5obyNvUvL9h',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("6VYF5jXq6rfq4QRgGMG6co7b1Ev1Lj7KSbHBxfQ9e1L3"),
      //   symbol: 'wDingocoin',
      //   name: 'Wrapped Dingocoin',
      //   logo: 'https://wrap.dingocoin.org/wDingocoin.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("ENoD8J2J6wNHkcJkvVBkwq5JMiR1oNBfBZRkoHCQogyT"),
      //   symbol: 'AABL',
      //   name: 'Abble',
      //   logo: 'https://sapphire-lazy-macaw-504.mypinata.cloud/ipfs/Qmf6i1Rzz82xayVFtmWN8U4hUWtE2cQVqVWKoNE8gmchMz',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8XSsNvaKU9FDhYWAv7Yc7qSNwuJSzVrXBNEk7AFiWF69"),
      //   symbol: 'abUSDC',
      //   name: 'Wrapped USDC (Allbridge from BSC)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BXXkv6z8ykpG1yuvUDPgh732wzVHB69RnB9YgSYh3itW/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BB33fYoeBVA2uv119be9tKvmXeuwtcx1W25N9KFNd2ca"),
      //   symbol: 'GODZ',
      //   name: 'Godz Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BB33fYoeBVA2uv119be9tKvmXeuwtcx1W25N9KFNd2ca/logo.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4AnuSHLSYc4J6yjNekrYMjknL4zJHCvRLXfUxgpmCLeQ"),
      //   symbol: 'ZPET',
      //   name: 'Zeus Pet AI',
      //   logo: 'https://raw.githubusercontent.com/ZeusPet-AI/contracts/main/zeuspet_logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("HWSqJdwemji7TNiKQPudUj86LXyF3vGAtWm5ePk5KzgD"),
      //   symbol: 'SIX',
      //   name: 'Solana Eco Index',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HWSqJdwemji7TNiKQPudUj86LXyF3vGAtWm5ePk5KzgD/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3UCMiSnkcnkPE1pgQ5ggPCBv6dXgVUy16TmMUe1WpG9x"),
      //   symbol: 'ALEPH',
      //   name: 'Aleph.im (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/ALEPH_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("3XTp12PmKMHxB6YkejaGPUjMGBLKRGgzHWgJuVTsBCoP"),
      //   symbol: 'BIRDDOG',
      //   name: 'Bird Dog',
      //   logo: 'https://dd.dexscreener.com/ds-data/tokens/solana/3XTp12PmKMHxB6YkejaGPUjMGBLKRGgzHWgJuVTsBCoP.png?size=md',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FTT8cGNp3rfTC6c44uPTuEFLqmsVDhjd2BhH65v2uppr"),
      //   symbol: 'ssoFTT-8',
      //   name: 'Saber Wrapped Wrapped FTT (Sollet) (8 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FTT8cGNp3rfTC6c44uPTuEFLqmsVDhjd2BhH65v2uppr/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("svtMpL5eQzdmB3uqK9NXaQkq8prGZoKQFNVJghdWCkV"),
      //   symbol: 'SVT',
      //   name: 'Solvent',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/svtMpL5eQzdmB3uqK9NXaQkq8prGZoKQFNVJghdWCkV/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2ioyweEeV4xJCkFJvh868X9iP3L6Q31MVCawfbJLRTHq"),
      //   symbol: 'WIFOUT',
      //   name: 'DOGWIFOUTHAT',
      //   logo: 'https://i.imgur.com/3642zZD.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Hz1XePA2vukqFBcf9P7VJ3AsMKoTXyPn3s21dNvGrHnd"),
      //   symbol: 'LIBRA',
      //   name: 'Libra Protocol',
      //   logo: 'https://bafkreie7gs73rnak3aqft5eipsbtd4rtam3locmddovgls6wdhfzsjbmqq.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8twuNzMszqWeFbDErwtf4gw13E6MUS4Hsdx5mi3aqXAM"),
      //   symbol: 'SB',
      //   name: 'Solbank',
      //   logo: 'https://gateway.irys.xyz/niSLX8FhcEagTaPapRW4gEbi_u2y675Gy1isLB6wAuM',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CF97pGa5aNhXYkERsYLbAZ1wyk6cSFrfKhd1ansRD3So"),
      //   symbol: 'MuShu',
      //   name: 'Dragon',
      //   logo: 'https://bafybeiesfkh2pusubfi4xjttjerzvuyhfp4qwjj24atubpi6zs4l3zvcoy.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 10
      // }
      // ,
      // {
      //   mint: new PublicKey("93NhryHqdN5eVz2n4Qoof7ELwnTcgHBw44tmGcLzxKXz"),
      //   symbol: 'DUBAI',
      //   name: 'Habibi Come To Dubai',
      //   logo: 'https://cdn.discordapp.com/attachments/912336086913679371/1203082217631260753/606344e0a14fa1.65973326-original.png?ex=65cfcca0&is=65bd57a0&hm=ce80eadae9234b0f02b0edbcb2a1c5f132afa0c14281783ff39085d95807bc63&',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("to1yVXiNRMVVgS8i54Yjj3xB51MTorFrCMz7N8cirbK"),
      //   symbol: 'TOLY',
      //   name: 'Anatoly Coin',
      //   logo: 'https://shdw-drive.genesysgo.net/3YZtwGNZZisAUxKokcivJEwq2ag93APVXYqeyfaqb9Rq/toly-img.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6cVgJUqo4nmvQpbgrDZwyfd6RwWw5bfnCamS3M9N1fd"),
      //   symbol: 'SHILL',
      //   name: 'Project SEED Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6cVgJUqo4nmvQpbgrDZwyfd6RwWw5bfnCamS3M9N1fd/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("HbxiDXQxBKMNJqDsTavQE7LVwrTR36wjV2EaYEqUw6qH"),
      //   symbol: 'GH0ST',
      //   name: 'GH0ST',
      //   logo: 'https://bafybeievcwt2kef6olonvu4aaw2ud5tjezq567kqq7cijsquveim723fni.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HonyeYAaTPgKUgQpayL914P6VAqbQZPrbkGMETZvW4iN"),
      //   symbol: '$HONEY',
      //   name: 'HONEY',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HonyeYAaTPgKUgQpayL914P6VAqbQZPrbkGMETZvW4iN/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("CREAMpdDimXxj2zTCwP5wMEtba4NYaKCrTBEQTSKtqHe"),
      //   symbol: 'CREAMY',
      //   name: 'Creamy',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CREAMpdDimXxj2zTCwP5wMEtba4NYaKCrTBEQTSKtqHe/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8W4qpyLx74vwBRewa3rVEPPVMnJ8VWMkCTWCTSYPQTDu"),
      //   symbol: 'MEMES',
      //   name: 'MemeCoinDAOai',
      //   logo: 'https://arweave.net/hb9M20acG4rA6SFess40tLnhJ6RZkd0EmluNwzh11Wc?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("UST8SCn7jrqsq51odVLqcmvnC658HkqrKrPL3w2hHQ7"),
      //   symbol: 'sUST-8',
      //   name: 'Saber Wrapped UST (Portal) (8 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/UST8SCn7jrqsq51odVLqcmvnC658HkqrKrPL3w2hHQ7/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("7qULVSb7XdoKBDDa7WnuUvoTx5ye4Vrj94iPcwibyQ1F"),
      //   symbol: 'PISS',
      //   name: 'Frog Piss',
      //   logo: 'https://shdw-drive.genesysgo.net/BLFjCRyZkaF9GGwiorXPRwYJVpxD7VrrKNH7XccWUCWF/frogpiss.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("6gSmbxSfgJrqeGBYwuKGuSbShhbDLjcCLWqzivvPeG3i"),
      //   symbol: 'CROWS',
      //   name: 'Royal Crows',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://creator-hub-prod.s3.us-east-2.amazonaws.com/royal_crows_pfp_1654260294179.gif',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("FEELeKVxHtsHHvu1ARySjETxnJMKbLC6wHCaMD68ipiR"),
      //   symbol: 'FEEL',
      //   name: 'FEEL',
      //   logo: 'https://api.feel.market/static/feel.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CY2E69dSG9vBsMoaXDvYmMDSMEP4SZtRY1rqVQ9tkNDu"),
      //   symbol: 'NFD',
      //   name: 'Feisty Doge NFT',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CY2E69dSG9vBsMoaXDvYmMDSMEP4SZtRY1rqVQ9tkNDu/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("4WRST6Q2yyDP1p7Bqszg8PAAoj8j69cj7QY4QLn5Aq3o"),
      //   symbol: 'ANTC',
      //   name: 'ANT Coin',
      //   logo: 'https://arweave.net/1rW4kHXhx8eW-YljQXGi1EhGdE6jCKZztlIWBrs-Fh4',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("MMAx26JtJgSWv6yH48nEHCGZcVvRbf9Lt9ALa7jSipe"),
      //   symbol: 'MMA',
      //   name: 'mma',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MMAx26JtJgSWv6yH48nEHCGZcVvRbf9Lt9ALa7jSipe/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HHjoYwUp5aU6pnrvN4s2pwEErwXNZKhxKGYjRJMoBjLw"),
      //   symbol: 'PIP',
      //   name: 'PIP',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HHjoYwUp5aU6pnrvN4s2pwEErwXNZKhxKGYjRJMoBjLw/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("H53UGEyBrB9easo9ego8yYk7o4Zq1G5cCtkxD3E3hZav"),
      //   symbol: 'MXM',
      //   name: 'MXM',
      //   logo: 'https://assets.mixmob.io/images/MXM_Token.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("bonegFPgrpZ4bfVn3kQK1aMbGYddWtfMAywNt5LsuVE"),
      //   symbol: 'BONES',
      //   name: 'BONES Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/bonegFPgrpZ4bfVn3kQK1aMbGYddWtfMAywNt5LsuVE/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE"),
      //   symbol: 'ORCA',
      //   name: 'Orca',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/orcaEKTdK7LKz57vaAYr9QeNsVEPfiu6QeMU1kektZE/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8yQuj5v4s72UqZi3sYZL5rAD4NPV4ueUwBKzChBDWMVf"),
      //   symbol: 'MRX',
      //   name: 'Maars',
      //   logo: 'https://raw.githubusercontent.com/maarstoken/crypto/main/maars-800x800.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("C8cNX2D1y3jqKpMFkQhP1gGbfvTEdeckZXLBKSN5z5KF"),
      //   symbol: 'Mail',
      //   name: 'SolMail',
      //   logo: 'https://cf-ipfs.com/ipfs/QmcAtxKADTdcZvZxZj3Gkc5YR4Ket1TDodrwzhHt49u3Bn',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh"),
      //   symbol: 'COPE',
      //   name: 'COPE',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8HGyAAB1yoM1ttS7pXjHMa3dukTFGQggnFFH3hJZgzQh/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8FktFPUvi73Ywf7ZivsbuQFyQCqZUwvqSQ51hNvRhR26"),
      //   symbol: '$MILK',
      //   name: 'Milk',
      //   logo: 'https://shdw-drive.genesysgo.net/Ck7ByKk3NZfC9EFTNiGBrLkvquKGyDL7KLk3h1rdW2P4/image.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("CTYiHf58UGShfHtpkTwx7vjPDA779dd6iVaeD281fEVx"),
      //   symbol: 'HUNT',
      //   name: 'Hunter Diamond',
      //   logo: 'https://tokenhunters.app/assets/img/icons/chest-close.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9kt93AW5QMjFL6ZxomnSq3FbWiU5ibNeTSgBz9UDFSB6"),
      //   symbol: 'GOD',
      //   name: 'GOD',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9kt93AW5QMjFL6ZxomnSq3FbWiU5ibNeTSgBz9UDFSB6/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("BQ3F72yt9FVRgYrqCVCG3YohyBesDZ9bTuhGdmQ7GNEF"),
      //   symbol: 'GROK',
      //   name: 'Grok',
      //   logo: 'https://imageupload.io/ib/buy0hGfs0Eq69TN_1699677473.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4Hx6Bj56eGyw8EJrrheM6LBQAvVYRikYCWsALeTrwyRU"),
      //   symbol: 'DYDX',
      //   name: 'dYdX (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/DYDX_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("2jw1uFmc1hhfJH3EqGhaE2rfZMMC2YBpxkZcdUbPppMn"),
      //   symbol: 'VIVAION',
      //   name: 'Vivaion Token',
      //   logo: 'https://arweave.net/Xz7ErS3TZYmBnoh3OPkIQM_O6TPotyEJb6H5WFOe_qc',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("htoHLBJV1err8xP5oxyQdV2PLQhtVjxLXpKB7FsgJQD"),
      //   symbol: 'HTO',
      //   name: 'HTO',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/htoHLBJV1err8xP5oxyQdV2PLQhtVjxLXpKB7FsgJQD/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3os2M3bX9qta154PRbU9rzaPUYAKAqVpaMMS8u2hoUQu"),
      //   symbol: 'abBTCB',
      //   name: 'Wrapped BTC (Allbridge from BSC)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/qfnqNqs3nCAHjnyCgLRDbBtq4p2MtHZxw8YjSyYhPoL/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EgQ3yNtVhdHz7g1ZhjfGbxhFKMPPaFkz8QHXM5RBZBgi"),
      //   symbol: 'aaDAI',
      //   name: 'Wrapped DAI (Allbridge from Avalanche)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FYpdBuyAHSbdaAyD1sKkxyLWbAP8uUW9h6uvdhK74ij1/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB"),
      //   symbol: 'soYFI',
      //   name: 'Wrapped YFI (Sollet)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3JSf5tPeuscJGtaCp5giEiDhv51gQ4v3zWg8DGgyLfAB/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("98ouGzbMV2DnHfn3Uc7oahwvDP4Cf7Ls77JsBiARdjvn"),
      //   symbol: 'DBC',
      //   name: 'DBank Coin',
      //   logo: 'https://arweave.net/g4a4JTGvXRxWYFIkuJtyEIDdIp2b487R_2YdTSUreXM',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("BABYsocP6cB95xvBDXnjXKX96VBNC37dmNWUtaV9Jk6v"),
      //   symbol: 'SBABYDOGE',
      //   name: 'SOL BABAY DOGE COIN',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BABYsocP6cB95xvBDXnjXKX96VBNC37dmNWUtaV9Jk6v/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("7GNyprqrpvJHNwzWSj4KVkqw9cKyV5aR3ehM2HeE5pw"),
      //   symbol: 'Miku',
      //   name: 'Mikuko Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7GNyprqrpvJHNwzWSj4KVkqw9cKyV5aR3ehM2HeE5pw/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("21kbezaCxz9dG2NtXp7pW1hAmtKe6ykiJkeT1EiGXDyY"),
      //   symbol: 'EDUST',
      //   name: 'Exiled Dust Protocol',
      //   logo: 'https://i.imgur.com/KPPBoDB.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB"),
      //   symbol: 'GST',
      //   name: 'GST',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AFbX8oGjGpmVFywbVouvhQSRmiW2aR1mohfahi4Y2AdB/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("TuLipcqtGVXP9XR62wM8WWCm6a9vhLs7T1uoWBk6FDs"),
      //   symbol: 'TULIP',
      //   name: 'Tulip',
      //   logo: 'https://raw.githubusercontent.com/sol-farm/token-logos/main/tulip.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("LiLyT885cG9xZKYQk9x6VWMzmcui4ueV9J1uzPDDajY"),
      //   symbol: 'LILY',
      //   name: 'Solily Protocol Coin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/LiLyT885cG9xZKYQk9x6VWMzmcui4ueV9J1uzPDDajY/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi"),
      //   symbol: 'wFTT_v1',
      //   name: 'FTT (Wormhole v1)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GbBWwtYTMPis4VHb8MrBbdibPhn28TSrLB53KvUmb7Gi/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6j14WyX1Ag2pLWvn99euK4xp2VcZD62VeJv2iwCrYmT8"),
      //   symbol: '$KSH',
      //   name: 'Keeshond Coin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6j14WyX1Ag2pLWvn99euK4xp2VcZD62VeJv2iwCrYmT8/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GS6E87SLTioRDG3uSVRwQmuKKMxDmWU7fktCTJ5xkEM8"),
      //   symbol: 'WAVE',
      //   name: 'Lost At Sea WAVE',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GS6E87SLTioRDG3uSVRwQmuKKMxDmWU7fktCTJ5xkEM8/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EF23Avq2cTPnMVTfHacZ3SG5Z8misHmFA2gbt2rKqiYH"),
      //   symbol: 'whoren',
      //   name: 'elizabath whoren',
      //   logo: 'https://bafkreibec5pa6bn24rqgkqfgyrqkjanbde4cz53xhxv4izol5pzhljpijm.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FLTHudk5B5zag7JmGXqrYrFfey6otevLQA6jm1UHHLEE"),
      //   symbol: 'FLTH',
      //   name: 'FLTH',
      //   logo: 'https://www.arweave.net/6cZ-d9BnAsCqxkpzazYmKjLpUN2kE-jYnU3WDV4_lo0?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8vRnnknwERunJEEDtEFoxzaxbxGnEY61FPbx8uTVKsUD"),
      //   symbol: 'PIF',
      //   name: 'pepewifhat',
      //   logo: 'https://bafkreibicwzofriyvt5up33rhejeqspemtamuwgvg3hg6wfkcf4najoxb4.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("xLfNTYy76B8Tiix3hA51Jyvc1kMSFV4sPdR7szTZsRu"),
      //   symbol: 'xLFNTY',
      //   name: 'xLifinity',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/xLfNTYy76B8Tiix3hA51Jyvc1kMSFV4sPdR7szTZsRu/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9mV4WUukVsva5wYcYW4veo34CNDiF44sh3Ji65JNdvh5"),
      //   symbol: 'TRUNK',
      //   name: 'Elephant Money Stable (Wormhole)',
      //   logo: 'https://elephant.money/img/logo/trunk-logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("PhiLR4JDZB9z92rYT5xBXKCxmq4pGB1LYjtybii7aiS"),
      //   symbol: 'POVT',
      //   name: 'Phil Overdrive | Youtube',
      //   logo: 'https://raw.githubusercontent.com/PhilOverdrive/Token/main/Logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1"),
      //   symbol: 'SBR',
      //   name: 'Saber Protocol Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4h4LvS6NsVjZ87uBwrYyTeppTm1ii5PtRN9A6Ld2kZjw"),
      //   symbol: '$FLY',
      //   name: 'StayFly',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4h4LvS6NsVjZ87uBwrYyTeppTm1ii5PtRN9A6Ld2kZjw/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("24a1k6wSDQUSwoRXJyvkr25kF5do8f6Ddff6A2fTc1pM"),
      //   symbol: '$BEAR',
      //   name: 'BEAR',
      //   logo: 'https://arweave.net/7Qzb-BKL734z8w77fPNJ8lu3f6TtA87nbiw2A-qmCK0',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("octo82drBEdm8CSDaEKBymVn86TBtgmPnDdmE64PTqJ"),
      //   symbol: 'OTK',
      //   name: 'Octokn',
      //   logo: 'https://storage.googleapis.com/the-octos-nfts/icon-otk-big-filled.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("88tmABf1s3A6jbLD2yLR1tgbGjz68fz3EDrbeSB1JPPc"),
      //   symbol: 'BOK',
      //   name: 'BONKLANA',
      //   logo: 'https://gateway.irys.xyz/oJvtfp7SYicoLG72x16OgkU5YK0SXK-krvF5k8_q0jI',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6Cw88QKMxS7LzAucXbYDcUEXPq1TvsojYPV9xWwJPt7r"),
      //   symbol: 'SPORE',
      //   name: 'Spore',
      //   logo: 'https://bafkreidodmcqrprsgoelphtr5vyqintuqscwixqfh6ndaqurvp2mnnx2h4.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y"),
      //   symbol: 'SNY',
      //   name: 'Synthetify',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4dmKkXNHdgYsXqBHCuMikNQWwVomZURhYvkkX5c4pQ7y/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GyuP7chtXSRB6erApifBxFvuTtz94x3zQo3JdWofBTgy"),
      //   symbol: 'D2X',
      //   name: 'D2',
      //   logo: 'https://scpri.me/files/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("8wzYfqeqkjBwYBHMacBVen8tSuJqXiDtsCgmjnUJDSKM"),
      //   symbol: 'PORTNOY',
      //   name: 'PORTNOY',
      //   logo: 'https://i.ibb.co/K0M01Ws/image.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("CJ5U6wPmjxFUyTJpUTS7Rt1UqhTmSVRMvmJ8WD4nndXW"),
      //   symbol: 'GLXY',
      //   name: 'Astrals GLXY',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CJ5U6wPmjxFUyTJpUTS7Rt1UqhTmSVRMvmJ8WD4nndXW/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6gx6Ph2ek73kF6EWDrG4GQ54pcLJB6CYpATuRyxKXumo"),
      //   symbol: 'fPHX',
      //   name: 'FillmorePHX',
      //   logo: 'https://gateway.irys.xyz/lUbE3hfwk7lOAeHT5ct_u2TfhBQMe7q9wFG4G9baElI',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8Qrc2pf9p24NyJVG1FagnqJXwKw6h5L5McxnMfJoUxev"),
      //   symbol: 'EMMY',
      //   name: 'Emmy',
      //   logo: 'https://gateway.irys.xyz/ssZtKHuRF1VRdRBZ5Oo5PdrPVvQ_c94EnCzR0CdtVPw',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo"),
      //   symbol: 'ROPE',
      //   name: 'Rope Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8PMHT4swUMtBzgHnh5U564N5sjPSiUz2cjEQzFnnP1Fo/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GS1VjXDZmDFsiqzBFYoACgRQBmXYuvdPJ88NQcXxg3qM"),
      //   symbol: 'SAMOWIF',
      //   name: 'samo wif hat',
      //   logo: 'https://bafybeigf4vhdjusff3au3piubpdiz2xq5lya67vt3ofp4afg5sfl3wweoe.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("CRYPTi2V87Tu6aLc9gSwXM1wSLc6rjZh3TGC4GDRCecq"),
      //   symbol: '$CRYPT',
      //   name: 'Crypt',
      //   logo: 'https://aql3kfuqpqpkdchvrzuwyx6pdnjw6p6pualx7kie5erqalavewgq.arweave.net/BBe1FpB8HqGI9Y5pbF_PG1NvP8-gF3-pBOkjACwVJY0?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("E5ZVeBMazQAYq4UEiSNRLxfMeRds9SKL31yPan7j5GJK"),
      //   symbol: 'LDZ',
      //   name: 'Voodoo',
      //   logo: 'https://shdw-drive.genesysgo.net/5QGtUB5S2RKa2QyXYcEaXnoDEDN1VswZ5YZkgZ8Zf81S/FB062705-73CE-42C7-9C6F-4C7679DAF01A.jpeg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("So111DzVTTNpDq81EbeyKZMi4SkhU9yekqB8xmMpqzA"),
      //   symbol: 'zSOL',
      //   name: 'zSOL',
      //   logo: 'https://raw.githubusercontent.com/LP-Finance-Inc/token-image/main/zSOL.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("91Fv8PztVLsf4S49RANPGW92veJ2oL6BjwsP9i666Wxu"),
      //   symbol: 'FUDSI',
      //   name: 'Fuddles Shiba Inu',
      //   logo: 'https://arweave.net/iv6zV6x03hbFXfnS1IJo0nSbr0HFNrjMzy_qbL3sjW8',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9iz45n44TQUPyoRymdZXEunqvZUksZyhzS6zQ7sLMadj"),
      //   symbol: 'POT',
      //   name: 'Positron',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9iz45n44TQUPyoRymdZXEunqvZUksZyhzS6zQ7sLMadj/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DhRQWsiP53gVXnG8KQwq63Uo1FvouRpVNL8536tsVD5H"),
      //   symbol: 'PHTEVE',
      //   name: 'Phteven',
      //   logo: 'https://wakodvrjrzqvc3fkaymxuogqxwh2x3pnaqarada6hczh6l7tx4xq.arweave.net/sBTh1imOYVFsqgYZejjQvY-r7e0EARAMHjiyfy_zvy8',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("A3HyGZqe451CBesNqieNPfJ4A9Mu332ui8ni6dobVSLB"),
      //   symbol: 'WOOP',
      //   name: 'WOOP',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/A3HyGZqe451CBesNqieNPfJ4A9Mu332ui8ni6dobVSLB/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("7JhmUcZrrfhyt5nTSu3AfsrUq2L9992a7AhwdSDxdoL2"),
      //   symbol: 'HMTR',
      //   name: 'HampterFi',
      //   logo: 'https://arweave.net/A6llvg1Lo9SXQYC4RQXVrTfwJ-eZpLl4_eZhJVGQfOg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("7EW2NTuQFYKVxF3WTA1L1v62pxB7RFYmVC7veGxNDFis"),
      //   symbol: 'SONIC',
      //   name: 'Sonic Sniper',
      //   logo: 'https://gateway.irys.xyz/4YjV9mHRSR89u80wMQm2-7cjvMsEJx47UyZE_JdZy-k',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GfJ3Vq2eSTYf1hJP6kKLE9RT6u7jF9gNszJhZwo5VPZp"),
      //   symbol: 'SOLPAD',
      //   name: 'Solpad Finance',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GfJ3Vq2eSTYf1hJP6kKLE9RT6u7jF9gNszJhZwo5VPZp/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB"),
      //   symbol: 'CATO',
      //   name: 'CATO',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5p2zjqCd1WJzAVgcEnjhb9zWDU7b9XVhFhx4usiyN7jB/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BDrL8huis6S5tpmozaAaT5zhE5A7ZBAB2jMMvpKEeF8A"),
      //   symbol: 'NOVA',
      //   name: 'NOVA FINANCE',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BDrL8huis6S5tpmozaAaT5zhE5A7ZBAB2jMMvpKEeF8A/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("E5ndSkaB17Dm7CsD22dvcjfrYSDLCxFcMd6z8ddCk5wp"),
      //   symbol: 'RIN',
      //   name: 'Aldrin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/E5ndSkaB17Dm7CsD22dvcjfrYSDLCxFcMd6z8ddCk5wp/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2kMpEJCZL8vEDZe7YPLMCS9Y3WKSAMedXBn7xHPvsWvi"),
      //   symbol: 'MOON',
      //   name: 'SolarMoon',
      //   logo: 'https://gateway.ipfscdn.io/ipfs/bafkreifwdwgcv6fnh5icz3wkefokatsemsojck4hftsnuf4xcfjcvagsva',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("8x9c5qa4nvakKo5wHPbPa5xvTVMKmS26w4DRpCQLCLk3"),
      //   symbol: 'PAINT',
      //   name: 'MS PAINT',
      //   logo: 'https://i.imgur.com/t7CeL6E.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M"),
      //   symbol: 'UXP',
      //   name: 'UXP Governance Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/UXPhBoR3qG4UCiGNJfV7MqhHyFqKN68g45GoYvAeL2M/uxp-icon-black.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FHfba3ov5P3RjaiLVgh8FTv4oirxQDoVXuoUUDvHuXax"),
      //   symbol: 'USDCav',
      //   name: 'USD Coin (Portal from Avalanche)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCav_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9m8E1yLHaG1B2TFSNeWahsitQh5yQRnrbyw756HFAcEa"),
      //   symbol: 'rLGND',
      //   name: 'Random Blockasset Legends',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9m8E1yLHaG1B2TFSNeWahsitQh5yQRnrbyw756HFAcEa/rLGND.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BHSTv1nsz57fsXZzcsYWXhEygyqAaQu63DUJd3Rcp5Jo"),
      //   symbol: 'BHST',
      //   name: 'Bit Harvest Studio Token',
      //   logo: 'https://gitlab.com/bitharveststudio/bhs_governance/-/raw/main/Luna-token.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT"),
      //   symbol: 'STEP',
      //   name: 'Step',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/StepAscQoEioFxxWGnh2sLBDFp9d8rvKz2Yp39iDpyT/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("J1YnyKzmxBwFkPftvZexnHTm4Am7JnmWydhxtXdwEmMv"),
      //   symbol: 'OPN',
      //   name: 'Open Ticketing Ecosystem',
      //   logo: 'https://arweave.net/4t-p2fZBHNMv7_9mwfFgN1ZWzbHGAUTdIJr399nRCgQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr"),
      //   symbol: 'SLRS',
      //   name: 'Solrise Finance',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SLRSSpSLUTP7okbCUBYStWCo1vUgyt775faPqz8HUMr/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GRFKaABC518SqXMvBpAVYUZtVT3Nj4mYk7E7xU4gA5Rg"),
      //   symbol: 'GOO',
      //   name: 'Silly Goose',
      //   logo: 'https://bafkreiaorhiyiwevs2h6qnm4vdku64r6yjc7avbzwmdszgxcikcynjaknu.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AYyYgh3i43s1QSpvG4vwhJ6s3gewfN7uteFwYrswgMGw"),
      //   symbol: 'HAGGORD',
      //   name: 'ps1 hagrid',
      //   logo: 'https://bafkreiak2a2gbdqqnz77xup3bi72lon5fe4ri4cpozxp5o4ekjnugm77wm.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CFbdjaKonbBQTYG2GC6CmB7exofgDYGCDR8tp8KVGS7T"),
      //   symbol: 'BORG',
      //   name: 'Cyborg Apes BORG',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CFbdjaKonbBQTYG2GC6CmB7exofgDYGCDR8tp8KVGS7T/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("LUNGEjUXyP48nrC1GYY5o4eTAkwm4RdX8BxFUxWJBLB"),
      //   symbol: 'sLUNA-9',
      //   name: 'Saber Wrapped LUNA (Portal) (9 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/LUNGEjUXyP48nrC1GYY5o4eTAkwm4RdX8BxFUxWJBLB/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GKZbA2gDzw3MoxbfRsnrJTNi5uBDrnrz9bq1pNnx6kv"),
      //   symbol: 'GBOY',
      //   name: 'GameBoy',
      //   logo: 'https://pbs.twimg.com/profile_images/1752805464117522432/XGx5KdSS_400x400.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6CNHDCzD5RkvBWxxyokQQNQPjFWgoHF94D7BmC73X6ZK"),
      //   symbol: 'GECKO',
      //   name: 'Gecko',
      //   logo: 'https://gateway.irys.xyz/2MOw1dmYBMp7XL-JylfJBKFsDZid_1xyK4cRjGYkzUY',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("o1Mw5Y3n68o8TakZFuGKLZMGjm72qv4JeoZvGiCLEvK"),
      //   symbol: 'Cope',
      //   name: 'Cope',
      //   logo: 'https://shdw-drive.genesysgo.net/HNTiV9QS4UDrcxpucyKRGTKQTqKGLif61GwM6tpd5R5V/image.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("GePFQaZKHcWE5vpxHfviQtH5jgxokSs51Y5Q4zgBiMDs"),
      //   symbol: 'JFI',
      //   name: 'Jungle DeFi',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GePFQaZKHcWE5vpxHfviQtH5jgxokSs51Y5Q4zgBiMDs/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9xYeZDHEwyuqJmqrTourbFRaxN2qhkYesnz3iQ3FPz4r"),
      //   symbol: 'ELMNT',
      //   name: 'ELMNT',
      //   logo: 'https://pbs.twimg.com/profile_images/1656328676768620549/ynTCpCiz_400x400.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx"),
      //   symbol: 'GMT',
      //   name: 'GMT',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7i5KKsX2weiTkry7jA4ZwSuXGhs5eJBEjY8vVxR4pfRx/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Baj2ueGuSwdKhdCsJrf7xvGBbUSpmpySYewQLbsiNs2Y"),
      //   symbol: 'smol',
      //   name: 'smol',
      //   logo: 'https://arweave.net/s9eJV8qhlpsU8qVf97UJ171iWtjB0AFZlVyk0tbzHBg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FtgGSFADXBtroxq8VCausXRr2of47QBf5AS1NtZCu4GD"),
      //   symbol: 'BRZ',
      //   name: 'BRZ',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FtgGSFADXBtroxq8VCausXRr2of47QBf5AS1NtZCu4GD/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("Ue4yjkPjA4QGis37eWbBsnqfzyK83BtY4AioDETp3Ab"),
      //   symbol: 'WHEY',
      //   name: 'WHEY',
      //   logo: 'https://cdn.discordapp.com/attachments/1052450866243850280/1076846325951365161/Coin_2.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("coqRkaaKeUygDPhuS3mrmrj6DiHjeQJc2rFbT2YfxWn"),
      //   symbol: 'BCOQ',
      //   name: 'BLACK COQINU',
      //   logo: 'https://arweave.net/nU1lZL13C5Kf4nTGqUYsqdWy43mXP9WeP7eOag61ZK4',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("HzwqbKZw8HxMN6bF2yFZNrht3c2iXXzpKcFu7uBEDKtr"),
      //   symbol: 'EURC',
      //   name: 'EURC',
      //   logo: 'https://www.circle.com/hubfs/Brand/EURC/EURC-icon_128x128.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("HXkbUADfocGyz2WrzJpjEfry8qyNDm5Kwiiq3Mz3tTi1"),
      //   symbol: '$RETIRE',
      //   name: 'Retire on Sol',
      //   logo: 'https://i.imgur.com/k1zkuJa.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("519W6ZZnduudeo6tp1YMgeWiNFeoq4kTVS4uMZggKE5r"),
      //   symbol: 'KLGT',
      //   name: 'Kleyne Gelt',
      //   logo: 'https://raw.githubusercontent.com/klglt/Crypto/main/menorah.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4uRn7vxRPWYP4HuAa4UNXwEPLRL8oQ71YByMhr6yBnL4"),
      //   symbol: 'WAVES',
      //   name: 'Playground Waves',
      //   logo: 'https://i.imgur.com/CFSGSyE.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("2YJH1Y5NbdwJGEUAMY6hoTycKWrRCP6kLKs62xiSKWHM"),
      //   symbol: 'GEMS',
      //   name: 'SolGems',
      //   logo: 'https://public.djib.io/QmdLDat9CvntvFPG98CcXJJ3tE1mQZkf5DEfPNhK8F3guq',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("uL2qhMckUAroJPt2MLHwEeppJNYE3wBAGFMCs3anwXn"),
      //   symbol: 'DRIPSPLIT',
      //   name: 'Drippies',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fit:640:640:0:0/plain/https://arweave.net/WeX4k81n1xfmCQjaqr16a_iK_R43b8F5mBYiob5YiUQ/4248.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("FPymkKgpg1sLFbVao4JMk4ip8xb8C8uKqfMdARMobHaw"),
      //   symbol: '$GRW',
      //   name: 'GrowSol',
      //   logo: 'https://bafybeiaf23s4jadgatgzrmad3u3ahic4wdpsgcubl4ka2a2mleuq7j4eya.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5V9qpFo8NMFyhYHbrqY2c1TJrvzZSnRJAdj4ryPVB18n"),
      //   symbol: 'croc',
      //   name: 'croc cat',
      //   logo: 'https://i.imgur.com/An0PFAu.jpeg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("48AEwauAHsJibyt3WqjQ6EoHnFBcnyHASfo7vB2eCXPS"),
      //   symbol: 'DRAW',
      //   name: 'DragonWar',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/48AEwauAHsJibyt3WqjQ6EoHnFBcnyHASfo7vB2eCXPS/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("AymKzSDznoLT7Vhsb4wSRnCj1gjcG3zkgYFY8fxsHHer"),
      //   symbol: 'TICKET',
      //   name: 'The Ticket Finance',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AymKzSDznoLT7Vhsb4wSRnCj1gjcG3zkgYFY8fxsHHer/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("Ch5JJQZspiJ9MCDURZAA8nnVvbiwD1tnPcfmkCcVPiDb"),
      //   symbol: 'GRUMP',
      //   name: 'GRUMPY CAT',
      //   logo: 'https://bafybeiclh3lsuq3bddebjez57c2ca3a52baxcqxhwuvscxf6j2y4dwwu2u.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HT1yjYG8tT7f8dEZHm8Bt9PmqpXoH9YyEPeaC2D4Ttx1"),
      //   symbol: 'Greg',
      //   name: 'Greg',
      //   logo: 'https://bafkreiat6jkwlrni62kcraunnhkzsz7khe3xhs5ygm64p2thyz6grxnore.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E"),
      //   symbol: 'soBTC',
      //   name: 'Wrapped Bitcoin (Sollet)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9n4nbM75f5Ui33ZbPYXn59EwSgE8CGsHtAeTH5YFeJ9E/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("HxhWkVpk5NS4Ltg5nij2G671CKXFRKPK8vy271Ub4uEK"),
      //   symbol: 'HXRO',
      //   name: 'Hxro (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/HXRO_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("A8eYjpNQF6QYEE7DnM4F514MErFzV1pxVT69d7mdSsMk"),
      //   symbol: 'WHO',
      //   name: 'Who',
      //   logo: 'https://bafybeiaahcxwjk6ooyja3xzobfr7gteou6yxsxksyvb7qs7wlhp3mezxty.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("J9BcrQfX4p9D1bvLzRNCbMDv8f44a9LFdeqNE4Yk2WMD"),
      //   symbol: 'ISC',
      //   name: 'International Stable Currency',
      //   logo: 'https://raw.githubusercontent.com/theISCTeam/isc_meta/master/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7p6zGHdmWHvCH4Lsik2MoMBXqPGhFbSPSceSBXd8KNEC"),
      //   symbol: 'PU238',
      //   name: 'Plutonium 238',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7p6zGHdmWHvCH4Lsik2MoMBXqPGhFbSPSceSBXd8KNEC/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("Qikhhhg9Ta3Jg7WoDFbSYuCAE14hx9hPvdz1zVp3zUw"),
      //   symbol: 'BURD',
      //   name: 'tudaBirds Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Qikhhhg9Ta3Jg7WoDFbSYuCAE14hx9hPvdz1zVp3zUw/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BKydRTNdaMJ8B4zPva3YhwUQcpvAsyZaGJnKA6F44fX7"),
      //   symbol: 'FBZ',
      //   name: 'FakeBiz',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BKydRTNdaMJ8B4zPva3YhwUQcpvAsyZaGJnKA6F44fX7/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CiKu4eHsVrc1eueVQeHn7qhXTcVu95gSQmBpX4utjL9z"),
      //   symbol: 'SHIB',
      //   name: 'Shiba Inu (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SHIB_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("E77cpQ4VncGmcAXX16LHFFzNBEBb2U7Ar7LBmZNfCgwL"),
      //   symbol: 'abUSDT',
      //   name: 'Wrapped USDT (Allbridge from BSC)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BQcdHdAQW1hczDbBi9hiegXAR7A98Q9jx3X3iBBBDiq4/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("PugAiDuaQ5hzicBHAW9qrQQ8qi4B6sh3n7PknKhyjeX"),
      //   symbol: 'PUGAI',
      //   name: 'PUGAI',
      //   logo: 'https://shdw-drive.genesysgo.net/CS412vMTyfY1J4u1Ve7UjAdhGu7V9jCJibkVussMnaKr/pug1%20(2).png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("EHaEBhYHWA7HSphorXXosysJem6qF4agccoqDqQKCUge"),
      //   symbol: 'WEYU',
      //   name: 'WEYU',
      //   logo: 'https://weyu.io/img/WEYU.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("7ZCm8WBN9aLa3o47SoYctU6iLdj7wkGG5SV2hE5CgtD5"),
      //   symbol: 'ELON',
      //   name: 'Dogelon (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/ELON_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("AaAEw2VCw1XzgvKB8Rj2DyK2ZVau9fbt2bE8hZFWsMyE"),
      //   symbol: 'aeWETH',
      //   name: 'Wrapped ETH (Allbridge from Ethereum)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EyrnrbE5ujd3HQG5PZd9MbECN9yaQrqc8pRwGtaLoyC"),
      //   symbol: 'abETH',
      //   name: 'Wrapped ETH (Allbridge from BSC)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeGn77dhg1KXRRFeSwwMiykZnZPw5JXW6naf2aQgZDQf/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FoRGERiW7odcCBGU1bztZi16osPBHjxharvDathL5eds"),
      //   symbol: 'FORGE',
      //   name: 'FORGE',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FoRGERiW7odcCBGU1bztZi16osPBHjxharvDathL5eds/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("RKT69NZHN5uovcan3q5hRbZzfJuXiGEuPmGANoBJLLz"),
      //   symbol: '$RKT',
      //   name: 'Racket',
      //   logo: 'https://arweave.net/Vr36ys1neJyzyfhkxv1Cxt3QJF7LhuDd_iGmvSYjLkg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("E4Q5pLaEiejwEQHcM9GeYSQfMyGy8DJ4bPWgeYthn24v"),
      //   symbol: 'ADA',
      //   name: 'Ada',
      //   logo: 'https://gateway.irys.xyz/BFejxwOQrFxDnvG84t8kUf3PI_nCU3PEBrHBlu6g5ww',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HmKqChBkZEvqFnH8sxja694n77ziYMBWaucZRKfJDRr2"),
      //   symbol: 'WOLF',
      //   name: 'WOLF SOLANA',
      //   logo: 'https://arweave.net/vqdJ1M-3GLpOKuMKZLXNbd-odMLzGrXdgVis8wSEt-M',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("EAefyXw6E8sny1cX3LTH6RSvtzH6E5EFy1XsE2AiH1f3"),
      //   symbol: 'RPC',
      //   name: 'Republic Credits',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EAefyXw6E8sny1cX3LTH6RSvtzH6E5EFy1XsE2AiH1f3/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4TGxgCSJQx2GQk9oHZ8dC5m3JNXTYZHjXumKAW3vLnNx"),
      //   symbol: 'OXS',
      //   name: 'Oxbull Sol',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4TGxgCSJQx2GQk9oHZ8dC5m3JNXTYZHjXumKAW3vLnNx/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("LnTRntk2kTfWEY6cVB8K9649pgJbt6dJLS1Ns1GZCWg"),
      //   symbol: 'lanternSOL',
      //   name: 'Lantern Staked SOL',
      //   logo: 'https://arweave.net/juI8rxciTff6pljaDiXMEq5klSOngQol_8lvyokGGwY',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5LSFpvLDkcdV2a3Kiyzmg5YmJsj2XDLySaXvnfP1cgLT"),
      //   symbol: 'DOGO',
      //   name: 'Dogemon',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5LSFpvLDkcdV2a3Kiyzmg5YmJsj2XDLySaXvnfP1cgLT/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("5nrAynqdsEyBc3GRc7hvM5QnDwjQVePNg9kn6bCvi4G3"),
      //   symbol: 'SUPER',
      //   name: 'SUPER TOKEN',
      //   logo: 'https://nftstorage.link/ipfs/bafkreibxcsqfuls3yiitufaid3wnjzrgx2gdswtteo33g6fojoxctob5na',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("F6v4wfAdJB8D8p77bMXZgYt8TDKsYxLYxH5AFhUkYx9W"),
      //   symbol: 'LUNA',
      //   name: 'LUNA (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/LUNA_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8HJ81sHVsmJMzm6XBfTgywWQXwQTmVdmXaQHm7htGPH2"),
      //   symbol: 'spurdo',
      //   name: 'Spurdo Spärde',
      //   logo: 'https://bafkreiedrxet7nlt4bcqwkf6eeouhp3r2ioswagyn7dpb4eqao4lwweede.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("kiGenopAScF8VF31Zbtx2Hg8qA5ArGqvnVtXb83sotc"),
      //   symbol: 'KI',
      //   name: 'Genopets Ki',
      //   logo: 'https://arweave.net/WfPR8w5dEoerG_bI3S2o2_nuSfWY3p8M4YbQ6ijd1cQ?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GGEMxCsqM74URiXdY46VcaSW73a4yfHfJKrJrUmDVpEF"),
      //   symbol: '$GGEM',
      //   name: 'Guild Saga Gems',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://gs-token.s3.us-west-2.amazonaws.com/guild-saga-gems-logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EswgBj2hZKdgovX2ihWSUDnuBg9VNbGmSGoH5yjNsPRa"),
      //   symbol: 'PHY',
      //   name: 'Physis',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EswgBj2hZKdgovX2ihWSUDnuBg9VNbGmSGoH5yjNsPRa/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8qJSyQprMC57TWKaYEmetUR3UUiTP2M3hXdcvFhkZdmv"),
      //   symbol: 'USDTbs',
      //   name: 'Tether USD (Portal from BSC)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTbs_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("Czt7Fc4dz6BpLh2vKiSYyotNK2uPPDhvbWrrLeD9QxhV"),
      //   symbol: 'NESTA',
      //   name: 'Nest Arcade',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Czt7Fc4dz6BpLh2vKiSYyotNK2uPPDhvbWrrLeD9QxhV/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("NeonTjSjsuo3rexg9o6vHuMXw62f9V7zvmu8M8Zut44"),
      //   symbol: 'NEON',
      //   name: 'Neon EVM',
      //   logo: 'https://raw.githubusercontent.com/neonevm/neon-evm.docs/main/static/icons/token.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("42Y3CgJQLnHjdScYMu8VS4TbeZMUNVdBMKYbf7hz7aum"),
      //   symbol: 'GMFC',
      //   name: 'Gamify Club',
      //   logo: 'https://pbs.twimg.com/profile_images/1444964749897175046/wdz26CzM_400x400.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2e7yNwrmTgXp9ABUmcPXvFJTSrEVLj4YMyrb4GUM4Pdd"),
      //   symbol: 'MSI',
      //   name: 'Matrix Solana Index',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2e7yNwrmTgXp9ABUmcPXvFJTSrEVLj4YMyrb4GUM4Pdd/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7y2KpMzsxmjCN8ogA3PSfwZvmYUgMuWo7NWY4Ct5jRHp"),
      //   symbol: 'BIRD',
      //   name: 'SolBird',
      //   logo: 'https://arweave.net/K_IaCXwL9YQTPJnZfvi302k2lhANDvmzkiy6e0Y6Zho',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9mWRABuz2x6koTPCWiCPM49WUbcrNqGTHBV9T9k7y1o7"),
      //   symbol: 'MAI',
      //   name: 'MAI Stablecoin',
      //   logo: 'https://raw.githubusercontent.com/0xlaozi/qidao/main/images/mimatic-red.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5ritAPtFPqQtEFHcHVqNjR5oFNUJqcmgKtZyPd2AyLLy"),
      //   symbol: 'KNOB',
      //   name: 'KNOB$',
      //   logo: 'https://i.postimg.cc/hPd4QCX6/knob-logo.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("SCSuPPNUSypLBsV4darsrYNg4ANPgaGhKhsA3GmMyjz"),
      //   symbol: 'SCS',
      //   name: 'Solcasino Token',
      //   logo: 'https://files.solcasino.io/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("HCpyiCXvziKByTGoQMLUmooAWBkCLvZmzB9D6TyPdACR"),
      //   symbol: 'QDOT',
      //   name: 'QDOT',
      //   logo: 'https://www.arweave.net/qyhe_8Lmd82_NWRwxdfPX0fm_CItn18KXV1Skp-x6N0?ext=jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("kinXdEcpDQeHPEuQnqmUgtYykqKGVFq6CeVX5iAHJq6"),
      //   symbol: 'KIN',
      //   name: 'KIN',
      //   logo: 'https://i.imgur.com/do6LTig.jpeg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("56tNQ29XBrbovm5K5SThuQatjCy92w2wKUaUeQ8WCD9g"),
      //   symbol: 'CRYY',
      //   name: 'CRY Coin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/56tNQ29XBrbovm5K5SThuQatjCy92w2wKUaUeQ8WCD9g/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("C4Kkr9NZU3VbyedcgutU6LKmi6MKz81sx6gRmk5pX519"),
      //   symbol: 'VEUR',
      //   name: 'VNX Euro',
      //   logo: 'https://4183046207-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsAJThQfNCJePE5h9iplX%2Fuploads%2FaZb0qZfNGNXHulNZRIko%2FVEUR%20256x256.png?alt=media&token=b6bad541-cee9-427d-8498-d4a4ea423c79',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2ZE6hSL36e44wP168YMnxrbi1CSCFuD2BJm7NoNHfsmN"),
      //   symbol: 'SOBER',
      //   name: 'Solabrador',
      //   logo: 'https://node2.irys.xyz/5xOYKlM26hYXX5wkZoQhc1yw0Bd0Xzoh_SU52TakOZQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("SL819j8K9FuFPL84UepVcFkEZqDUUvVzwDmJjCHySYj"),
      //   symbol: 'sETH-8',
      //   name: 'Saber Wrapped Ethereum (Sollet) (8 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SL819j8K9FuFPL84UepVcFkEZqDUUvVzwDmJjCHySYj/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("HfYFjMKNZygfMC8LsQ8LtpPsPxEJoXJx4M6tqi75Hajo"),
      //   symbol: 'CWAR',
      //   name: 'Cryowar Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HfYFjMKNZygfMC8LsQ8LtpPsPxEJoXJx4M6tqi75Hajo/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("6y8W5YwAuzostqrS4YDJufBvksosfSi47Pd8U4A5vrBC"),
      //   symbol: 'WEC',
      //   name: 'Whole Earth Coin',
      //   logo: 'https://ipfs.moralis.io:2053/ipfs/QmStqd3JLmEA9bfcUzt2CWF2iPzt7tgPmnkgou7JxauUkz',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GTH3wG3NErjwcf7VGCoXEXkgXSHvYhx5gtATeeM5JAS1"),
      //   symbol: 'WHALES',
      //   name: 'Whales Market',
      //   logo: 'https://nftstorage.link/ipfs/bafkreic6gboxk4nlhhzzuoqakj55s23y37qzwb7yzykczfxbwj7kafy75i',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2eu1K3wvfPC7gVj1CK8ohv4ggusdN6qxyxpjHyTCkjZT"),
      //   symbol: 'REWD',
      //   name: 'Reward Protocol',
      //   logo: 'https://bafkreic2ndn27fumdff4q3qht3a6dq44peoys7bf437n2rlcnci25tzkyi.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DeoP2swMNa9d4SGcQkR82j4RYYeNhDjcTCwyzEhKwfAf"),
      //   symbol: 'DEO',
      //   name: 'Deo',
      //   logo: 'https://arweave.net/RuNPo7tAR05f_7g_Yz36NMyVKHAFrOXjIEKPtOZx2Qc',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2HeykdKjzHKGm2LKHw8pDYwjKPiFEoXAz74dirhUgQvq"),
      //   symbol: 'SAO',
      //   name: 'Sator',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2HeykdKjzHKGm2LKHw8pDYwjKPiFEoXAz74dirhUgQvq/Sator_Logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb"),
      //   symbol: 'MAPS',
      //   name: 'MAPS',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MAPS41MDahZ9QdKXhVa4dWB9RuyfV4XqhyAZ8XcYepb/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7VUUicqKYFVmewg1U4w4e9K4FoEYdTcYyxYCPhRNf5Qy"),
      //   symbol: 'green',
      //   name: 'solana green',
      //   logo: 'https://arweave.net/W68r4cNKbj0t_GRf1km_e9nzm4BLfspy0X-yX8mh4fQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("C7K4Tot6fnnNwhWpqw9H277QPcP56vHAEeXubRHDyCo9"),
      //   symbol: 'Speero',
      //   name: 'Speero',
      //   logo: 'https://assets.coingecko.com/coins/images/34252/standard/speeroLOGO.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("EXA537HSBVpsFijENbt6Muuy9AADUN8dUmYKD4oKbjJE"),
      //   symbol: 'EGG',
      //   name: 'Eggdog',
      //   logo: 'https://bafybeietkiaw53lzurtiqayxujtuhfmfxkko5rh2xphmxxnyxhqddwy7tu.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh"),
      //   symbol: 'DFL',
      //   name: 'DeFi Land',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/DFL1zNkaGPWm1BqAVqRjCZvHmwTFrEaJtbzJWgseoNJh/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AASdD9rAefJ4PP7iM89MYUsQEyCQwvBofhceZUGDh5HZ"),
      //   symbol: 'SLX',
      //   name: 'Solex Finance',
      //   logo: 'https://raw.githubusercontent.com/solexfin/token-list/main/assets/mainnet/AASdD9rAefJ4PP7iM89MYUsQEyCQwvBofhceZUGDh5HZ/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DuSyBCGuhPvyGu6cSvbZonvQvh8JLyGvXJn1TmkJh6Zn"),
      //   symbol: '$NEON',
      //   name: 'NeonGame Credits',
      //   logo: 'https://arweave.net/VPS4BrOgXT4rg-mwGfCLqXL8vtbII0ianMBsw_L2CeE',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("FeLoyXk8ac2AYVmDhAWEKNWWT63Z9TczeidYbpDvxF3T"),
      //   symbol: 'wCAPS_v1',
      //   name: 'Wrapped Capsule Coin (Wormhole v1)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FeLoyXk8ac2AYVmDhAWEKNWWT63Z9TczeidYbpDvxF3T/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("MEANeD3XDdUmNMsRGjASkSWdC8prLYsoRJ61pPeHctD"),
      //   symbol: 'MEAN',
      //   name: 'MEAN',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MEANeD3XDdUmNMsRGjASkSWdC8prLYsoRJ61pPeHctD/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("J9hBnna1TMySX9hA3FgiC5xYph5pYHmcLVq2Sp36hDkz"),
      //   symbol: 'SKYH',
      //   name: 'Sky Hause',
      //   logo: 'https://i.imgur.com/68qAjC0.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GTgMjfKTBF9jVBogMnaiAVnHmvnF2wyGAv3zvtk5CBHq"),
      //   symbol: 'CLUB',
      //   name: 'CLUB',
      //   logo: 'https://arweave.net/XSWZOeipKasgKjDKm54O2R0S3Rrld1B6gQV_rtIjfF4',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HezGWsxSVMqEZy7HJf7TtXzQRLiDruYsheYWqoUVnWQo"),
      //   symbol: 'HOLY',
      //   name: 'HolyGrails',
      //   logo: 'https://arweave.net/TDvr4xgh3VxmHG8GglxruoSwm41wkYOLPF7EBrhBiBY',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HKYX2jvwkdjbkbSdirAiQHqTCPQa3jD2DVRkAFHgFXXT"),
      //   symbol: 'PRINT',
      //   name: 'Print Protocol',
      //   logo: 'https://bafkreiaepyesgvxkwkgy242tig5bdre65f4zcm2ohcqkv5yafcz3o3ijfy.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4nFwuKievw5wcpcXtUDdfxWLyXsEdvgkpENzC9M9Y5me"),
      //   symbol: 'BOOK',
      //   name: 'Solbook',
      //   logo: 'https://i.ibb.co/m4ZWcvG/tokenlogo-1.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("EZF2sPJRe26e8iyXaCrmEefrGVBkqqNGv9UPGG9EnTQz"),
      //   symbol: 'FUM',
      //   name: 'FUMoney',
      //   logo: 'https://raw.githubusercontent.com/FUMoney801/token-list/main/assets/mainnet/EZF2sPJRe26e8iyXaCrmEefrGVBkqqNGv9UPGG9EnTQz/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ChVzxWRmrTeSgwd3Ui3UumcN8KX7VK3WaD4KGeSKpypj"),
      //   symbol: 'SUSHI',
      //   name: 'SushiToken (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/SUSHI_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("icex2Fy2KtXjfiAAUEHLPHu7XKDLvwiyVUPP9PNpSkF"),
      //   symbol: 'ICE',
      //   name: 'Infinity Diamonds ICE',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/icex2Fy2KtXjfiAAUEHLPHu7XKDLvwiyVUPP9PNpSkF/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("75XracgnqjPeuexHKWQU3bBcXMZG6XLDF867tKB1T9e6"),
      //   symbol: 'ISL',
      //   name: 'The Islanders',
      //   logo: 'https://cdn.jsdelivr.net/gh/koudydev/crypto/main/islIcon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX"),
      //   symbol: 'wHUSD_v1',
      //   name: 'HUSD Stablecoin (Wormhole v1)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BybpSTBoZHsmKnfxYG47GDhVPKrnEKX31CScShbrzUhX/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("EwJN2GqUGXXzYmoAciwuABtorHczTA5LqbukKXV1viH7"),
      //   symbol: 'UPS',
      //   name: 'UPS token (UPFI Network)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EwJN2GqUGXXzYmoAciwuABtorHczTA5LqbukKXV1viH7/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("T8KdT8hDzNhbGx5sjpEUxepnbDB1TZoCa7vtC5JjsMw"),
      //   symbol: 'sUSDT-8',
      //   name: 'Saber Wrapped USDT (8 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/T8KdT8hDzNhbGx5sjpEUxepnbDB1TZoCa7vtC5JjsMw/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("Ez2zVjw85tZan1ycnJ5PywNNxR6Gm4jbXQtZKyQNu3Lv"),
      //   symbol: 'fUSDC',
      //   name: 'Fluid USDC',
      //   logo: 'https://static.fluidity.money/images/tokens/fUSDC.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("PRSMNsEPqhGVCH1TtWiJqPjJyh2cKrLostPZTNy1o5x"),
      //   symbol: 'PRISM',
      //   name: 'PRISM',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRSMNsEPqhGVCH1TtWiJqPjJyh2cKrLostPZTNy1o5x/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("kiNeKo77w1WBEzFFCXrTDRWGRWGP8yHvKC9rX6dqjQh"),
      //   symbol: 'KKO',
      //   name: 'KKO Protocol',
      //   logo: 'https://www.arweave.net/lxCJWYgYzilFtAEzqbdvS9xN98-9cG4EvizAkgx1dCY?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("MELLd8PyFoeNW3D5VaUe7L96eZeihtrzgLWrbKz5DR2"),
      //   symbol: 'MELL',
      //   name: 'Mellivora',
      //   logo: 'https://arweave.net/YIrpNAQuLbOMvI8hSRCzJakzm5qiT_wv1Av5mpcYxrY',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("6DSqVXg9WLTWgz6LACqxN757QdHe1sCqkUfojWmxWtok"),
      //   symbol: 'CORN',
      //   name: 'Solanacorn',
      //   logo: 'https://arweave.net/c_Tbuf4_HSFuogvTV1_FaqqbQipml9YlAETM941s178',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("8HfNu2EfwFQz2srSNDvPsjaWV3G65ZWP3pDC67mcNv6J"),
      //   symbol: 'NOCT',
      //   name: 'Neural Octopus',
      //   logo: 'https://raw.githubusercontent.com/Neural-Octopus-Token/noct-metadata/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Frog8vt6gmuuUuuerd7ispP6yavssBUtMpEP5DCEuUgD"),
      //   symbol: '$FROG',
      //   name: 'Frog',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Frog8vt6gmuuUuuerd7ispP6yavssBUtMpEP5DCEuUgD/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8CSTYs264XFrGym2WLy6QGgq6isxU8G4Und9q1gVbbbB"),
      //   symbol: 'GMCOCK',
      //   name: 'Felt Gaming Labs',
      //   logo: 'https://cdn.discordapp.com/attachments/1026783859309809674/1188099299565908029/IMG_8491.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("GmW12mAzyTj897Y3pgxDQzpnNid7q58E8T7V56rmaUdD"),
      //   symbol: 'COME',
      //   name: 'Community of Meme',
      //   logo: 'https://photos.pinksale.finance/file/pinksale-logo-upload/1710895928245-3b82d54c6607c34a0499ee540316e572.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("5YtGSyQ7YxFgDc9oj4SpZGTjoS5p5Fubkg8sMauQqXoS"),
      //   symbol: 'PULP',
      //   name: 'PULP',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5YtGSyQ7YxFgDc9oj4SpZGTjoS5p5Fubkg8sMauQqXoS/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M"),
      //   symbol: 'OXY',
      //   name: 'Oxygen Protocol',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/z3dn17yLaGMKffVogeFHQ9zWVcXgqgf3PQnDsNs2g6M/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DxRbkqB2cEqa4rnXJwq4z3GuksgpL2U27PWBw8QBcNv2"),
      //   symbol: 'TAPES',
      //   name: "Trippin' Ape Tribe Floor Index",
      //   logo: 'https://i.imgur.com/iFgvQva.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("3byG6HEKhG5gUZ5PZU9zKkFaEHYPveGEtvs68LYR8R5N"),
      //   symbol: 'OPOS',
      //   name: 'OPOS Coin',
      //   logo: 'https://arweave.net/fivrynPZdJv5ajd4d1TXW1yHArDA-RvkYYfDoh-_4EU',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("6CBm8B8uoCUZWjs9n32BNy4z6LjGj4etBH2X48JWVhzf"),
      //   symbol: 'BRAH',
      //   name: 'BRAH SUPPS INTL.',
      //   logo: 'https://brahsupps.com/res/misc/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("PsyFiqqjiv41G7o5SMRzDJCu4psptThNR2GtfeGHfSq"),
      //   symbol: 'PSY',
      //   name: 'PsyOptions',
      //   logo: 'https://user-images.githubusercontent.com/32071703/149460918-3694084f-2a37-4c95-93d3-b5aaf078d444.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7eJCLyW5KkvzdzkVXs1ukA1WfFjCcocXjVit64tYcown"),
      //   symbol: 'SLITE',
      //   name: 'SolanaLite',
      //   logo: 'https://raw.githubusercontent.com/SolanaLite/SolanaLite-Brand-Kit/main/SolanaLite%20(SLITE)%20Logo%20Solana%20Blockchain.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3FHpkMTQ3QyAJoLoXVdBpH4TfHiehnL2kXmv9UXBpYuF"),
      //   symbol: 'STYLE',
      //   name: 'STYLE',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3FHpkMTQ3QyAJoLoXVdBpH4TfHiehnL2kXmv9UXBpYuF/style.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5RpUwQ8wtdPCZHhu6MERp2RGrpobsbZ6MH5dDHkUjs2"),
      //   symbol: 'BUSDbs',
      //   name: 'Binance USD (Portal from BSC)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BUSDbs_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("kiraZUmSnzgfVfhrdvNj6hxHFaPFTTUk8ioY98cbh6G"),
      //   symbol: 'KIRA',
      //   name: 'KIRA',
      //   logo: 'https://www.arweave.net/71SbFojNuoFeQ_n4cfMYKzX87xPvsQvNr59R_ZM7ucQ?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("sunSBR8hRLZy13HCHdrT3hjJZVRpkVfXF3QaaJYjxZ2"),
      //   symbol: 'sunSBR',
      //   name: 'sunSBR',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/sunSBR8hRLZy13HCHdrT3hjJZVRpkVfXF3QaaJYjxZ2/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("LTXH7nCGXz5TBZ57H8oZu7YwmDSVfSqWViW4B28yg8X"),
      //   symbol: 'LTX',
      //   name: 'Tanox',
      //   logo: 'https://shdw-drive.genesysgo.net/6EcEYWtMEjonup7RcqStXtfTnYYKavBizgFDGoJoVPZL/image.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("DG5bH1BnfjB5YL7Vt3GjykkUKf6maDUW3jYvdNa9eEVa"),
      //   symbol: 'WUT',
      //   name: 'WUT',
      //   logo: 'https://i.ibb.co/XtLXFLV/photo-2024-01-17-16-21-23.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FabjHjc1druUQoHVtudpNiCpnf73rtLzMkRM1b5NSbb6"),
      //   symbol: 'D/ACC',
      //   name: 'D/ACC',
      //   logo: 'https://img.fotofolio.xyz/?url=https%3A%2F%2Fnftstorage.link%2Fipfs%2Fbafkreiaad6yxjxad6qpkb7taodfnbfv74hmgmnorqatab27r54jpgroqci%2F',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("E9bjYSAqabYAd2Zaev4qAMVNAiX7Z2Dp4Sn1JgsTn2b6"),
      //   symbol: 'CCC',
      //   name: 'Chairman Chow',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/E9bjYSAqabYAd2Zaev4qAMVNAiX7Z2Dp4Sn1JgsTn2b6/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("8ymi88q5DtmdNTn2sPRNFkvMkszMHuLJ1e3RVdWjPa3s"),
      //   symbol: 'SDOGE',
      //   name: 'SolDoge',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8ymi88q5DtmdNTn2sPRNFkvMkszMHuLJ1e3RVdWjPa3s/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("Doggoyb1uHFJGFdHhJf8FKEBUMv58qo98CisWgeD7Ftk"),
      //   symbol: 'DOGGO',
      //   name: 'DOGGO',
      //   logo: 'https://shdw-drive.genesysgo.net/BBwXjBB6LtWGjKW5GveUSau5z9KZv2CK5AWmb7FCDF6K/doggies_coin.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("DDRmuJ77t7d6pkBDXE47ZALjSZm3udVGJMgZjZBk41LH"),
      //   symbol: 'MERTD',
      //   name: 'Merted',
      //   logo: 'https://bafybeibpf5nm257i63j2ttxrnzsirmmavwn5fj5y24olh5a55ydlugekpe.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("V7ntWk4D9Frwaec2CUjMRMMsJG28Cd31HxDKNdP1qjM"),
      //   symbol: '$Clown',
      //   name: 'ClownOnSolana',
      //   logo: 'https://arweave.net/q1EkX68UfbUnvjpA87GaRjGxVaP6f0lYMBeQXmFzN6w',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Aogv6j1wWiBAZcqRNN1Y89eozda2ke6rkc4CYy7c4iCi"),
      //   symbol: 'JUNGLE',
      //   name: 'Jungle',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Aogv6j1wWiBAZcqRNN1Y89eozda2ke6rkc4CYy7c4iCi/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2wme8EVkw8qsfSk2B3QeX4S64ac6wxHPXb3GrdckEkio"),
      //   symbol: 'sols',
      //   name: 'sols',
      //   logo: 'https://arweave.net/DjDIitc-424x1UlvJLElsmhfIK3QMuFlPnJKT3CVkWY?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EZGvDFqrMSAxTt3Ud2bcguASaPKwGExiDzHVLqT3STZm"),
      //   symbol: 'PRE-',
      //   name: 'PRE-TOKEN',
      //   logo: 'https://bafybeiceqp3ezfenvetlirrtqzpyeagbafzuabsr3klzfaev4bpzqbccke.ipfs.nftstorage.link/PRE-logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("C5xtJBKm24WTt3JiXrvguv7vHCe7CknDB7PNabp4eYX6"),
      //   symbol: 'T1NY',
      //   name: 'Tiny Bonez',
      //   logo: 'https://raw.githubusercontent.com/danvernon/tiny-dogz-logo/main/coin.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("MLKmUCaj1dpBY881aFsrBwR9RUMoKic8SWT3u1q5Nkj"),
      //   symbol: 'MILK',
      //   name: 'MILK',
      //   logo: 'https://www.arweave.net/HayHyYd_wWkVl0-LqTXKfBqxGTLnXkSB8wQwtbXe8c0?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("zwqe1Nd4eiWyCcqdo4FgCq7LYZHdSeGKKudv6RwiAEn"),
      //   symbol: 'SOLPAY',
      //   name: 'SOLPAY',
      //   logo: 'https://raw.githubusercontent.com/nguilbaud/token-list/main/assets/mainnet/zwqe1Nd4eiWyCcqdo4FgCq7LYZHdSeGKKudv6RwiAEn/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BULLa6g9e5UCuTXC5Z3Cf7s7CgvJhnJfY71DwipSmF8w"),
      //   symbol: 'BULL',
      //   name: 'BULL',
      //   logo: 'https://shdw-drive.genesysgo.net/GVxcsjC2PMpAS1E6aVp78YH7FqpfqxPY1ujeqNduhD1f/bull.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DxtssVdyYe4wWE5f5zEgx2NqtDFbVL3ABGY62WCycHWg"),
      //   symbol: 'BRETT',
      //   name: 'Brett',
      //   logo: 'https://node1.irys.xyz/Lc1vGYEY45eezP3nJcHDbUFOpn0jEQeTvoJ8akpRkXQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GEJpt3Wjmr628FqXxTgxMce1pLntcPV4uFi8ksxMyPQh"),
      //   symbol: 'daoSOL',
      //   name: 'daoSOL Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GEJpt3Wjmr628FqXxTgxMce1pLntcPV4uFi8ksxMyPQh/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DFrJxDoLMYt6bNYeNe8Wrjzj2UPUSLZLEMMYBLuTKcTk"),
      //   symbol: 'NINJA',
      //   name: 'NINJA TURTLES',
      //   logo: 'https://arweave.net/2J8mJ6N6GCg7BWTHtcPZMEZsF2iuTYBRI9jdtnHS77o',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("JAzesW3tU2VLDx99pwgkDMca2DTNsEhSWG8sj21B1niz"),
      //   symbol: 'PHNX',
      //   name: 'Phoenix',
      //   logo: 'https://bafybeicmwtzskjhcsnoymhsv5fmlruwoxgounmcweiei2qnxh6ayesupiq.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("AEUT5uFm1D575FVCoQd5Yq891FJEqkncZUbBFoFcAhTV"),
      //   symbol: 'sUSDT-9',
      //   name: 'Saber Wrapped USDT (9 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AEUT5uFm1D575FVCoQd5Yq891FJEqkncZUbBFoFcAhTV/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("SarosY6Vscao718M4A778z4CGtvcwcGef5M9MEH1LGL"),
      //   symbol: 'SAROS',
      //   name: 'Saros',
      //   logo: 'https://rapid.coin98.com/Currency/saros.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("Gz7VkD4MacbEB6yC5XD3HcumEiYx2EtDYYrfikGsvopG"),
      //   symbol: 'MATICpo',
      //   name: 'MATIC (Portal from Polygon)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/MATICpo_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("Hg35Vd8K3BS2pLB3xwC2WqQV8pmpCm3oNRGYP1PEpmCM"),
      //   symbol: 'eSOL',
      //   name: 'Eversol staked SOL',
      //   logo: 'https://raw.githubusercontent.com/everstake/solana-program-library/master/stake-pool/static-content/images/esol_token.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EBQ6gWBQNxA2zB4twR5GWP6CkeAhqZZZeDgeP7BTtdM3"),
      //   symbol: 'PERP',
      //   name: 'PerpeTraders',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EBQ6gWBQNxA2zB4twR5GWP6CkeAhqZZZeDgeP7BTtdM3/logo.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("33fsBLA8djQm82RpHmE3SuVrPGtZBWNYExsEUeKX1HXX"),
      //   symbol: 'BUSDet',
      //   name: 'Binance USD (Portal from Ethereum)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BUSDet_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("8UaGbxQbV9v2rsMxy2G2NEh1JYQ8T9dmggq1oesrXD9c"),
      //   symbol: 'RIBH',
      //   name: 'Ribh',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8UaGbxQbV9v2rsMxy2G2NEh1JYQ8T9dmggq1oesrXD9c/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("6ep1sNB9UWni3nBZUX84USsRBhKRzMAxEmcia479cWTh"),
      //   symbol: 'EPIKO',
      //   name: 'Epiko Regal (Wormhole)',
      //   logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/28018.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("5SwxhEunuUUcWe4ojybdDwky6dpLxAehNmF4AA71STNh"),
      //   symbol: '$SWTS',
      //   name: 'SWEETS',
      //   logo: 'https://arweave.net/TIiNLtJtWuC0yxXPXXQpXalXyGaUFp4rT7h8WG5EwH4',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("6F9XriABHfWhit6zmMUYAQBSy6XK5VF1cHXuW5LDpRtC"),
      //   symbol: 'RUN',
      //   name: 'Run Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6F9XriABHfWhit6zmMUYAQBSy6XK5VF1cHXuW5LDpRtC/RunGear.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2maDvG9nXGVstjdnsCZoSsNtjoda1SsZTLrHBVRgLR5F"),
      //   symbol: 'CORE',
      //   name: 'CORE',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/2x4fH7kWNgSLpBjCuFBKKKiNHMcJb6fHs8ahQZUWJj1p/Core.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HqLRjru6pD6GFGnQ7TwSSGQRuPhF8UZNey9T4yCsZzuq"),
      //   symbol: 'SIZE',
      //   name: 'SIZE',
      //   logo: 'https://bafybeidjk54m3p4mvfrvvgsyx6uszovxszwlvucupxfjbso3t3u2kfalja.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("ALQ9KMWjFmxVbew3vMkJj3ypbAKuorSgGst6svCHEe2z"),
      //   symbol: 'MDF',
      //   name: 'MatrixETF DAO Finance',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ALQ9KMWjFmxVbew3vMkJj3ypbAKuorSgGst6svCHEe2z/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("Gh1jKzmxf95cT5PQabNbfJskkQU8kQ5UugfpbHSnPq9z"),
      //   symbol: 'NRC',
      //   name: 'Neon Rocket Coin',
      //   logo: 'https://raw.githubusercontent.com/neontechanoah/neon_rocket_coin/main/asset/NRC_Logo_100px.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("4v3UTV9jibkhPfHi5amevropw6vFKVWo7BmxwQzwEwq6"),
      //   symbol: 'OVOL',
      //   name: 'Ovols',
      //   logo: 'https://elixir-site.s3.amazonaws.com/ovols-logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("Kz1csQA91WUGcQ2TB3o5kdGmWmMGp8eJcDEyHzNDVCX"),
      //   symbol: 'USDTav',
      //   name: 'Tether USD (Portal from Avalanche)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTav_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FCqfQSujuPxy6V42UvafBhsysWtEq1vhjfMN1PUbgaxA"),
      //   symbol: 'USDCbs',
      //   name: 'USD Coin (Portal from BSC)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDCbs_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("6dKCoWjpj5MFU5gWDEFdpUUeBasBLK3wLEwhUzQPAa1e"),
      //   symbol: 'CHEX',
      //   name: 'Chintai',
      //   logo: 'https://chintai.io/images/icon.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("94XduSfSnyas7jAEFSJSXiCi1xQ4mENWcii1aCvjVuqu"),
      //   symbol: 'JIMMY',
      //   name: 'JIMMY',
      //   logo: 'https://arweave.net/5NmSALkMrjr5p33OrjuQlA5a3LRPLv0Ta07SnEWt1fk',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9hjZ8UTNrNWt3YUTHVpvzdQjNbp64NbKSDsbLqKR6BZc"),
      //   symbol: 'ANUS',
      //   name: 'URANUS',
      //   logo: 'https://anusexplorer.com/web-logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Fxgdfsy1Z5Mvh53o69s2Ev6TGxtAJ1RQ5RJ5moCpKmQZ"),
      //   symbol: 'SI',
      //   name: 'sealwifhat',
      //   logo: 'https://bafybeiay63g7wqdbndfp6yxuvonuigsp4qrgm22ultyndxurnuu7tkkbbi.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CCKDRAd4Xwjoovtf2s1duu3d4TPTmFRyh1hfrb3ZUGR2"),
      //   symbol: 'MILK',
      //   name: 'Tiddy Juice Coin',
      //   logo: 'https://arweave.net/S71DNASA5TYlrK9giRy7QgqFNw1m4mxqY6OdtgY1E7k',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz"),
      //   symbol: 'GENE',
      //   name: 'Genopets',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GENEtH5amGSi8kHAtQoezp1XEXwZJ8vcuePYnXdKrMYz/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FjBedzf7WrWmo4yd3Tc2U6indeEQXtdewZ514hYxH5X9"),
      //   symbol: 'HEIST',
      //   name: 'The Heist',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://bafybeigch4m7rbec2l255powwbjmacnyj5n5o54qcboiwfgs2nnw6thimq.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("4vqYQTjmKjxrWGtbL2tVkbAU1EVAz9JwcYtd2VE3PbVU"),
      //   symbol: 'WYNN',
      //   name: 'Anita Max Wynn',
      //   logo: 'https://bafybeiepbscydfgvbfqq4augkwub2tsvbsm3e6uau3he2mmmbj4ebuyyym.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("t5cSTUSZzUAQXQKzQvhieFG4Hz4xC23z9du1Chp8gES"),
      //   symbol: 'KORRA',
      //   name: 'KORRA',
      //   logo: 'https://node2.irys.xyz/SE3kQL3Ur04sWUvYlCE_fS-Xdbc9IYaJFv1RyJFj7fQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("BkW2v5uv6skTW5c5GYjBctkbY9nuyyHs3gry1dCo5Hra"),
      //   symbol: 'BOKU',
      //   name: 'BōKU Labz',
      //   logo: 'https://bafybeid35kcydo75arckv6nwbpxofohxp6jbx3sq6qy4fbmv3idmiqayeq.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BtX7AfzEJLnU8KQR1AgHrhGH5s2AHUTbfjhUQP8BhPvi"),
      //   symbol: 'srenBTC-10',
      //   name: 'Saber Wrapped renBTC (10 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BtX7AfzEJLnU8KQR1AgHrhGH5s2AHUTbfjhUQP8BhPvi/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 10
      // }
      // ,
      // {
      //   mint: new PublicKey("MarcoPaG4dV4qit3ZPGPFm4qt4KKNBKvAsm2rPGNF72"),
      //   symbol: 'GOBI',
      //   name: 'Gobi',
      //   logo: 'https://arweave.net/uscHuZUd7GsiPIJz2zS_et6_boil-DhtF0zJdrX8hM8?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9e6nnqbsTjWx3ss6a3x7Q9ZvpupLNYLb8cTbVmm6UD2K"),
      //   symbol: 'SHUT',
      //   name: 'Shuttlecoin',
      //   logo: 'https://raw.githubusercontent.com/Mikkel76543/crypto9/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP"),
      //   symbol: 'AURY',
      //   name: 'Aurory',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AURYydfxJib1ZkTir1Jn1J9ECYUtjb6rKQVmtYaixWPP/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2mqi8iLJf9WaVRHd7nhRkqvCafxfb3Us7wshaJR73ykS"),
      //   symbol: 'POOR',
      //   name: 'Poor token',
      //   logo: 'https://shdw-drive.genesysgo.net/AZgm3Vdo1QLf8bKUjyearDC9NygpRHmmtzPaBNQcF4jt/IMG_1640.JPG',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("PumPRGmZ56t3Vngxo6fCP7ZJQ14oUg3biKxXrEyQBSf"),
      //   symbol: 'PUMPR',
      //   name: 'Pumpr',
      //   logo: 'https://arweave.net/Drsc75CkUoUY-4c_6iYXTUl2YCMt_0rz6xs8M9Mduq0',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("Bqd2ujCTEzpKzfjb1FHL7FKrdM6n1rZSnRecJK57EoKz"),
      //   symbol: 'HOTTO',
      //   name: 'HottoShotto',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Bqd2ujCTEzpKzfjb1FHL7FKrdM6n1rZSnRecJK57EoKz/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BgJW7U1u2RY5XJk9uYb5AqFRzjMtqE7pw3kaf9iw9Ntz"),
      //   symbol: '$PELF',
      //   name: 'PELFORT',
      //   logo: 'https://raw.githubusercontent.com/yamitora0/pelfort/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4q5UBXJxE91BZKX548qhU8i5QBWvZdXzS3RZwfTgLQda"),
      //   symbol: 'N2H4',
      //   name: 'Hydrazine',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4q5UBXJxE91BZKX548qhU8i5QBWvZdXzS3RZwfTgLQda/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7j7H7sgsnNDeCngAPjpaCN4aaaru4HS7NAFYSEUyzJ3k"),
      //   symbol: 'SOLR',
      //   name: 'SolRazr',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7j7H7sgsnNDeCngAPjpaCN4aaaru4HS7NAFYSEUyzJ3k/SOLR.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("CRkwd2QedqDi5u6W2w6jeAViAUd1pR4AXs2aKvh7GW7M"),
      //   symbol: 'SEI',
      //   name: 'Solanium Ecosystem Index',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/CRkwd2QedqDi5u6W2w6jeAViAUd1pR4AXs2aKvh7GW7M/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("GjdreVe7iUG4hyESSweGyFzgekWufhEwGJqAaa1hr7pf"),
      //   symbol: 'WATT',
      //   name: 'WATT token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GjdreVe7iUG4hyESSweGyFzgekWufhEwGJqAaa1hr7pf/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3hkAy2qcNJaxS3KebjNdugYbgakLvUZHRGZyRmGjSsbm"),
      //   symbol: 'CWR',
      //   name: 'Capo Was Right',
      //   logo: 'https://bafkreihp7yxlafl54d3tjjlvoyspd7sccwyzro4xj5mcqw7o6nysvoq74m.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2cpCdyVCpxzwYWFhFqgMJqxnMgEMDGohHUQuf4ppWuAH"),
      //   symbol: 'TROG',
      //   name: 'Thug Frog',
      //   logo: 'https://bafkreifdk5zl36v7fe5hn2ccbdbt3ot4x25l6l25hjqmb6lzfbpi23yh4q.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("3uNAevHamuZKKQdtdLzmHNvqD8r14tXUUXx5PN48UbYC"),
      //   symbol: 'NLTK',
      //   name: 'Nasi Lemak',
      //   logo: 'https://raw.githubusercontent.com/avaelon/nltk/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ELSnGFd5XnSdYFFSgYQp7n89FEbDqxN4npuRLW4PPPLv"),
      //   symbol: 'wHEX_v1',
      //   name: 'HEX (Wormhole v1)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ELSnGFd5XnSdYFFSgYQp7n89FEbDqxN4npuRLW4PPPLv/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("EsPKhGTMf3bGoy4Qm7pCv3UCcWqAmbC1UGHBTDxRjjD4"),
      //   symbol: 'FTM',
      //   name: 'FTM (Allbridge from Fantom)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EsPKhGTMf3bGoy4Qm7pCv3UCcWqAmbC1UGHBTDxRjjD4/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4ptcYkUypE7sDH82oXaeykaAJunuB4yeDJeiLJwS2nQc"),
      //   symbol: 'CREDITS',
      //   name: 'SDrive Credit Token',
      //   logo: 'https://cdn.sdrive.pro/sdrive/credits_token.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("EATGZHJViJsk7nEKkrdJicwNbfpkJfAtmrEmrjXR8NBj"),
      //   symbol: 'POPDOG',
      //   name: 'PopDog',
      //   logo: 'https://i.postimg.cc/SRb6fSps/SBZ5KM3L.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("96QoNkZLTKH7Gecf6dKMRXBQXW1wqh378uF9pnTejgAw"),
      //   symbol: '$POPO',
      //   name: "Popo Pepe's Dog",
      //   logo: 'https://gateway.irys.xyz/NsqnWfvg7r-SmICp9Gy5fIEBFWYlshxcSiV92H39_k4',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GDzfemoYR5GkbK4YupYpyq3E8Du9fSfKXxKDpkdrqGjs"),
      //   symbol: 'KART',
      //   name: 'Klausen Art',
      //   logo: 'https://arweave.net/X9ohmd49MmOEYi4dfMyOv_M24NnnyzQXZEoALTuQ0ao',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("G7rwEgk8KgQ4RUTnMy2W2i7dRDq4hXHD4CSp9PSmSbRW"),
      //   symbol: 'CHAD',
      //   name: 'CHAD',
      //   logo: 'https://bafybeicl7hj53czkh3vqclya2tltuuj3f4r7acwbchwjjajfv3jvff62iu.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("cocvP5K8DsDYbJkRGasSg69xWFenrVVdBLLKjJKPJSo"),
      //   symbol: 'COC',
      //   name: 'COC',
      //   logo: 'https://shdw-drive.genesysgo.net/B7zYUoJVxzhi25zRWPniu4keY4ogmswMRnra1SQMsBnw/coc-logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("4jZXkSNgTQKCDb36ECZ6a2aNzcUniGcDeXgTdtM2HxAX"),
      //   symbol: 'BORK',
      //   name: 'Bork',
      //   logo: 'https://node1.irys.xyz/v7mjymWz2rjAHe1Sn3rUECDdjWjYx_MZ_zi5hhQsgOU',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FYa25XnBsXQXAdTnsyKBKd5gZ1VZhChBRF57CqfRxJZX"),
      //   symbol: 'monk',
      //   name: 'monkeyhaircut',
      //   logo: 'https://bafybeifx7lchopsihh6qhw5nvq4tjbwl4wf2wy745mugvhdq5krk2bwsmi.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("FgX1WD9WzMU3yLwXaFSarPfkgzjLb2DZCqmkx9ExpuvJ"),
      //   symbol: 'NINJA',
      //   name: 'NINJA',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FgX1WD9WzMU3yLwXaFSarPfkgzjLb2DZCqmkx9ExpuvJ/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("CNL2opdqaQDY7yudm5V4MAaTwuuY32LTKqNP93jZM8X6"),
      //   symbol: 'HARAMBE',
      //   name: 'HarambeCoin (Wormhole)',
      //   logo: 'https://enu6hxxdf2rvlczerdbramwgwbowknvkamy4wlglyahtnqycw2ha.arweave.net/I2nj3uMuo1WLJIjDEDLGsF1lNqoDMcssy8APNsMCto4',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU"),
      //   symbol: 'SAMO',
      //   name: 'Samoyed Coin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7xKXtg2CW87d97TXJSDpbD5jBkheTqA83TZRuJosgAsU/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4YK1njyeCkBuXG6phNtidJWKCbBhB659iwGkUJx98P5Z"),
      //   symbol: 'DOLAN',
      //   name: 'Dolan Duck',
      //   logo: 'https://pbs.twimg.com/profile_images/1749802424590798848/8Go1WkbK_400x400.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9TPL8droGJ7jThsq4momaoz6uhTcvX2SeMqipoPmNa8R"),
      //   symbol: 'VNXAU',
      //   name: 'VNX Gold',
      //   logo: 'https://4183046207-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FsAJThQfNCJePE5h9iplX%2Fuploads%2FPtbQj02lkcRrWtIxo9jl%2FVNXAU%20256x256.png?alt=media&token=55ff0216-91fa-48e1-9426-0327ac43c4b8',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EA4SyW5UDnntXwUyyogN9UgpLU4q71HWgjhJBFUHTqLY"),
      //   symbol: 'Jorlps',
      //   name: 'Jorlps',
      //   logo: 'https://i.imgur.com/6T2GZ98.jpeg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HxRELUQfvvjToVbacjr9YECdfQMUqGgPYB68jVDYxkbr"),
      //   symbol: 'NANA',
      //   name: 'NANA Token',
      //   logo: 'https://shdw-drive.genesysgo.net/EV1ARo89dwRzR1kv7JMr7V97qrcXjffkcwEuNHMJfJmz/Banan.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EsirN3orp85uyvZyDrZnbe9cyo7N1114ynLFdwMPCQce"),
      //   symbol: 'AEVUM',
      //   name: 'Aevum',
      //   logo: 'https://arweave.net/mqtxUgbHYOu4lEUzMZy5YFZtItQQZtjZWbFUIbcM6cU',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Trhor7npQLca4DFiUWR9vJCAw1je2zghSbwh37nW81i"),
      //   symbol: 'RHO',
      //   name: 'RHO',
      //   logo: 'https://nftstorage.link/ipfs/bafkreif5ri7om5uezpbiqyx7xo74mxwoth5lsc2l4h6yki3aqlcmhsxkwe',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo"),
      //   symbol: 'wstETH',
      //   name: 'Lido Wrapped Staked ETH',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/ZScHuTtqZukUrtZS43teTKGs2VqkKL8k4QCouR2n6Uo/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("6naWDMGNWwqffJnnXFLBCLaYu1y5U9Rohe5wwJPHvf1p"),
      //   symbol: 'SCRAP',
      //   name: 'SCRAP',
      //   logo: 'https://art.pixilart.com/bd1b1275fdc0ac1.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("KRTapyUMe5fW92KZkYoXToFtc6Cn7UG6seaKz646oGu"),
      //   symbol: 'OOINK',
      //   name: 'OOINK',
      //   logo: 'https://raw.githubusercontent.com/danvernon/tiny-dogz-logo/main/oink.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9WMwGcY6TcbSfy9XPpQymY3qNEsvEaYL3wivdwPG2fpp"),
      //   symbol: 'JELLY',
      //   name: 'Jelly',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9WMwGcY6TcbSfy9XPpQymY3qNEsvEaYL3wivdwPG2fpp/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("A6rSPi9JmJgVkW6BatsA6MjFYLseizPM2Fnt92coFjf4"),
      //   symbol: 'MAGAIBA',
      //   name: 'MAGAIBA',
      //   logo: 'https://s2.coinmarketcap.com/static/img/coins/64x64/29941.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("6D7nXHAhsRbwj8KFZR2agB6GEjMLg4BM7MAqZzRT8F1j"),
      //   symbol: 'GOSU',
      //   name: 'Gosu',
      //   logo: 'https://raw.githubusercontent.com/jGosu/gosu/main/GOSU%20COIN.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("9mXZ54YnJJRmUN2MaMEtWCfFyoncP4ZhKz7U9DZ4JY2X"),
      //   symbol: 'SPACEGOLD',
      //   name: 'SPACEGOLD',
      //   logo: 'https://raw.githubusercontent.com/cosmic-condos/SPACEGOLD/main/logo-icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("DM8YLBujra6arvKuZ23d4ukqLdzbiGuhyWM4dUZnTnFA"),
      //   symbol: 'PSG',
      //   name: 'Piggy Sol Gang',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://cdn.piggygang.com/imgs/4a9e3480c4230ee0efb2a408fab74d91.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("7udMmYXh6cuWVY6qQVCd9b429wDVn2J71r5BdxHkQADY"),
      //   symbol: 'COBAN',
      //   name: 'COBAN',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7udMmYXh6cuWVY6qQVCd9b429wDVn2J71r5BdxHkQADY/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("edge86g9cVz87xcpKpy3J77vbp4wYd9idEV562CCntt"),
      //   symbol: 'edgeSOL',
      //   name: 'Edgevana Staked SOL',
      //   logo: 'https://arweave.net/JqUwm41OHf2jFLDognx7BKD6N9LiUDDRMTI8k2B7fHE',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AAmGoPDFLG6bE82BgZWjVi8k95tj9Tf3vUN7WvtUm2BU"),
      //   symbol: 'RACEFI',
      //   name: 'RaceFi Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AAmGoPDFLG6bE82BgZWjVi8k95tj9Tf3vUN7WvtUm2BU/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("H1aN3vcvB68eaFPbMkoAss3vnfi4AhP5C2dpnrZzdBc7"),
      //   symbol: 'MYRA',
      //   name: 'Myra',
      //   logo: 'https://bafkreieakw6eo745t2l46h2lii3n4sych5jl4v4ldumngslnjph53r6m5y.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GHvFFSZ9BctWsEc5nujR1MTmmJWY7tgQz2AXE6WVFtGN"),
      //   symbol: 'SOLAPE',
      //   name: 'SolAPE Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GHvFFSZ9BctWsEc5nujR1MTmmJWY7tgQz2AXE6WVFtGN/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HeqCcMjmuV5s25J49YiJyT6bD5qWLkP88YPajBySniaV"),
      //   symbol: 'PONK',
      //   name: 'Ponk',
      //   logo: 'https://bafkreieyllpkega3ytsmq5gdwx2p44roka5pnlclw2an4xivqmbq7prmge.ipfs.nftstorage.link/',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("Aw8qLRHGhMcKq7rxs5XBNCd9oe3BvoAhpNMVz7AdGmty"),
      //   symbol: 'PANDA',
      //   name: 'Panda Coin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Aw8qLRHGhMcKq7rxs5XBNCd9oe3BvoAhpNMVz7AdGmty/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5EjMX8pZkJtkbJwT5vzJhzTexBPhECFUrq5ndD3UkQD1"),
      //   symbol: 'ALL',
      //   name: 'Sallar',
      //   logo: 'https://arweave.net/bCcdDWvWucyfARaT-8aUKo8Xm-rOHcyrlPSM8Qn7WQQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr"),
      //   symbol: 'CMFI',
      //   name: 'Compendium Finance',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5Wsd311hY8NXQhkt9cWHwTnqafk7BGEbLu8Py3DSnPAr/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7sWMHQaJJPn1rkeizq41iPiW5gG7Ry7PXYAVHaUwY4qu"),
      //   symbol: 'EDO',
      //   name: 'EDO',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7sWMHQaJJPn1rkeizq41iPiW5gG7Ry7PXYAVHaUwY4qu/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GHAhTrgtYW7jRkojQQWPGkMbmG5jGK25QBu6FSj5tvZ5"),
      //   symbol: 'GLTR',
      //   name: 'Glitter',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/GHAhTrgtYW7jRkojQQWPGkMbmG5jGK25QBu6FSj5tvZ5/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DjzG1gPn2cotdV9cvkho4KxD3Poy2VjJeghCivv8U8Wj"),
      //   symbol: 'CHADS',
      //   name: 'Chads',
      //   logo: 'https://pbs.twimg.com/profile_images/1644310237896114183/c0KZkqJ3_400x400.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("G6mc7tiVSym3zrmmxekF3HYSc9c2hiKnGk7idoHqHTUK"),
      //   symbol: 'pre',
      //   name: 'pre',
      //   logo: 'https://arweave.net/pLKQdikCbGGkmHQ2y4ePS3M2czrLNJB2OgSRg8K71TQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BYPsjxa3YuZESQz1dKuBw1QSFCSpecsm8nCQhY5xbU1Z"),
      //   symbol: 'NEAR',
      //   name: 'NEAR (Allbridge from Near)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BYPsjxa3YuZESQz1dKuBw1QSFCSpecsm8nCQhY5xbU1Z/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("KNVfdSJyq1pRQk9AKKv1g5uyGuk6wpm4WG16Bjuwdma"),
      //   symbol: 'swhETH-9',
      //   name: 'Saber Wrapped Ether (Portal) (9 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/KNVfdSJyq1pRQk9AKKv1g5uyGuk6wpm4WG16Bjuwdma/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("drakduQWnTS89CdTUdgHmZzEkN6reBLYqrk8rzVhU53"),
      //   symbol: 'DRAKO',
      //   name: 'Drako',
      //   logo: 'https://shdw-drive.genesysgo.net/BKajV6Kxs53iWNuBZW23CXKv2TWwHMtYYRLrTgUVXL6U/drako.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("DVzrCErBzydh92bBzSJX1dKwVvb4omwhrvNz8CwRyxxV"),
      //   symbol: 'VONSPEED',
      //   name: 'Andrea Von Speed',
      //   logo: 'https://i.ibb.co/bmZ6pZP/8338-C1-BC-0745-4201-BE73-D39-ADCCE129-F.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G"),
      //   symbol: 'xSTEP',
      //   name: 'Staked Step',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/xStpgUCss9piqeFUk2iLVcvJEGhAdJxJQuwLkXP555G/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("93RC484oMK5T9H89rzT5qiAXKHGP9jscXfFfrihNbe57"),
      //   symbol: 'ZERO',
      //   name: 'ZERO',
      //   logo: 'https://gateway.irys.xyz/0qYdLixPAk4cYEpaf3ylqZ-JIbw8Vqg6R9xXZrH9SCc',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("53ctv3wwFXQbXruKWsbQcCe7sefowyu96pXK6FRLTjfv"),
      //   symbol: 'WISDM',
      //   name: 'Dog Of Wisdom',
      //   logo: 'https://gateway.irys.xyz/aUIj5AIANJ9w7TIWSCDIws1UBtewzaz_ZRhDF5GbljI',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("LMFzmYL6y1FX8HsEmZ6yNKNzercBmtmpg2ZoLwuUboU"),
      //   symbol: 'LMF',
      //   name: 'Lamas Finance',
      //   logo: 'https://www.lamas.co/resource/lmf_token.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9MjAmgHXbu5drkNa9XpzfozgsM5Dcq6bSnKZzdNrwscC"),
      //   symbol: '$FORCE',
      //   name: 'Force',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9MjAmgHXbu5drkNa9XpzfozgsM5Dcq6bSnKZzdNrwscC/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Fa96VxtHsUwGbi8DtjXFjsUjAP6rm18AWw5ezsTN4sxw"),
      //   symbol: 'Orys',
      //   name: 'ORYS',
      //   logo: 'https://arweave.net/biihR7IHkBTFIqirTaskPxbkUYfyYL0rUYMAgPhETeE',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GdbyLsNKHKLXTZVEo8QrGKVmrexEeZUYvhpSfuZ9TdkC"),
      //   symbol: 'RODAI',
      //   name: 'ROD.AI',
      //   logo: 'https://www.rodai.meme/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey"),
      //   symbol: 'MNDE',
      //   name: 'Marinade',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/MNDEFzGvMt87ueuHvVU9VcTqsAP5b3fTGPsHuuPA5ey/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9999j2A8sXUtHtDoQdk528oVzhaKBsXyRGZ67FKGoi7H"),
      //   symbol: 'sBTC-9',
      //   name: 'Saber Wrapped Bitcoin (Sollet) (9 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/9999j2A8sXUtHtDoQdk528oVzhaKBsXyRGZ67FKGoi7H/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("F47vvwFYuLioQsqEVAjqdY6Yihc8wVRiUcfHGcBR9XUs"),
      //   symbol: 'ELGATO',
      //   name: 'el gato',
      //   logo: 'https://dd.dexscreener.com/ds-data/tokens/solana/F47vvwFYuLioQsqEVAjqdY6Yihc8wVRiUcfHGcBR9XUs.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("2XPqoKfJitk8YcMDGBKy7CMzRRyF2X9PniZeCykDUZev"),
      //   symbol: 'HUND',
      //   name: 'HUND',
      //   logo: 'https://ipfs.io/ipfs/QmVMuMjyfKkuVnb8rHFXYor1ezFp9xrecatMH7TizPWdKV',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BFpchrNVhyTRzMNAg9QkiZfRN2vqRBwcYoTX8qgkbDvm"),
      //   symbol: 'arab',
      //   name: 'Arab Cat',
      //   logo: 'https://assets.coingecko.com/coins/images/34845/standard/arab_cat_cg.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("2EBjqPYGLUExdWwJJRLqtGPawzb2aMjE1wTpUYKhy2UQ"),
      //   symbol: 'BIRB',
      //   name: 'birb',
      //   logo: 'https://arweave.net/qkyn_nVLFuJx1mphiPH5pb5jSnnRc52ATLZXzwmqXGY',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("mmonechkLNdUxDbvP9Yntwo459QfUmqDdzV95DNvnr6"),
      //   symbol: 'MUTANT',
      //   name: 'MUTANT',
      //   logo: 'https://shdw-drive.genesysgo.net/893AmBr2P9NVydpWc2TAkR3prwBtWMZH2A8RniDmduhn/mmonToken.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Ch9NFVk5sqEPQHtw2gJVgnHfTm7FW1JspYwc7SxLi6q3"),
      //   symbol: 'MEND',
      //   name: 'Mend',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Ch9NFVk5sqEPQHtw2gJVgnHfTm7FW1JspYwc7SxLi6q3/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("EKCW975DWdt1roK1NVQDf4QGfaGTcQPU5tFD1DMcMe9Q"),
      //   symbol: 'THOL',
      //   name: 'Tholana',
      //   logo: 'https://arweave.net/qOW4Inn_tDPZI3rQ-OtRa8gSZ0d5pgGV6vRY9D1T5zU',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 7
      // }
      // ,
      // {
      //   mint: new PublicKey("8PMJczfs9W8TDKiNBD85AuqxE8tWACCDeUwxpUeadL3j"),
      //   symbol: 'CEICAT',
      //   name: 'CEILING CAT',
      //   logo: 'https://i.imgur.com/ROCbyO3.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3XxvmED354933DwSPJuzB7SE9uiWpD1ErydDuhmbFRMk"),
      //   symbol: 'DIP',
      //   name: 'doginthpool',
      //   logo: 'https://bafkreidjc5can5he5bx7qgvbdkrpmgajs3lcaqm6hvixvrceinc5tsaacq.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8JF4ekdgw7VTdrrdCABAKAxLc55mGu9ptasNiamih4a9"),
      //   symbol: 'SHARK',
      //   name: 'White Shark Coin',
      //   logo: 'https://gateway.irys.xyz/t94Df4aOwJhBuAYoVqA4WFB78v8gJh9H8FRg-SBqmqQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("7a4cXVvVT7kF6hS5q5LDqtzWfHfys4a9PoK6pf87RKwf"),
      //   symbol: 'LUNY',
      //   name: 'Luna Yield',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/7a4cXVvVT7kF6hS5q5LDqtzWfHfys4a9PoK6pf87RKwf/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("T1oYbAejEESrZLtSAjumAXhzFqZGNxQ4kVN9vPUoxMv"),
      //   symbol: '$daumen',
      //   name: 'Daumenfrosch',
      //   logo: 'https://bafkreia2rq6bzgsq2jw2of54xv6hflj6zvkiw3zba2unmlomo2czhquqqy.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("76aYNHbDfHemxSS7vmh6eJGfjodK8m7srCxiYCrKxzY1"),
      //   symbol: 'ROLL',
      //   name: 'HRHC Token',
      //   logo: 'https://hrhc.io/images/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("G7uYedVqFy97mzjygebnmmaMUVxWHFhNZotY6Zzsprvf"),
      //   symbol: 'CSTR',
      //   name: 'CoreStarter',
      //   logo: 'https://raw.githubusercontent.com/CoreStarter/token-logo/main/corestarter_logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BHcPVARUJEV3rCAmbLgRm7QPmZotsCcHcKWwzvCSAHJi"),
      //   symbol: 'POOWEL',
      //   name: 'JORAM POOWEL',
      //   logo: 'https://ipfs.io/ipfs/QmTsKAzWkoGfqgD6TUdzB843RzVsdTKG5JAxEreJ97dByN',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("gso1xA56hacfgTHTF4F7wN5r4jbnJsKh99vR595uybA"),
      //   symbol: 'GSOL',
      //   name: 'Sunrise gSOL',
      //   logo: 'https://arweave.net/46QNhUyat533ptVC2myiNVb5BvSP7PAFzM5ILCZTrGU',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BUD1144GGYwmMRFs4Whjfkom5UHqC9a8dZHPVvR2vfPx"),
      //   symbol: 'BUD',
      //   name: 'BunnyDucky Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/BUD1144GGYwmMRFs4Whjfkom5UHqC9a8dZHPVvR2vfPx/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("Taki7fi3Zicv7Du1xNAWLaf6mRK7ikdn77HeGzgwvo4"),
      //   symbol: 'TAKI',
      //   name: 'Taki',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Taki7fi3Zicv7Du1xNAWLaf6mRK7ikdn77HeGzgwvo4/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("ACeWC77UeW2DBZMe7YBsuXoxLvk4dHMnPzneApau1Au6"),
      //   symbol: 'AI',
      //   name: 'Any Inu (Wormhole)',
      //   logo: 'https://raw.githubusercontent.com/anyinu/MediaAssets/849ced29c7614ad8193661e7faa8eaece31eb313/ailogo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("Vjq9T5xmqRzLXQRyvigzyZzpHCGCsbYAJ7afLVuF8j9"),
      //   symbol: 'rZOOM',
      //   name: 'Random Zaysan Raptors',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Vjq9T5xmqRzLXQRyvigzyZzpHCGCsbYAJ7afLVuF8j9/rZOOM.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("7usVzynPTUJ9czdS96ezm9C6Z3hCsjb7j6TMKipURyyQ"),
      //   symbol: 'LEIA',
      //   name: 'Leia',
      //   logo: 'https://bafkreifjempcywq7od7svwed4ds4dieemifdy4tpguba2kv5zhmapi6ufm.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4ThReWAbAVZjNVgs5Ui9Pk3cZ5TYaD9u6Y89fp6EFzoF"),
      //   symbol: '1SOL',
      //   name: '1sol.io (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/1SOL_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("FriCEbw1V99GwrJRXPnSQ6su2TabHabNxiZ3VNsVFPPN"),
      //   symbol: 'FRIES',
      //   name: 'Soltato FRIES',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FriCEbw1V99GwrJRXPnSQ6su2TabHabNxiZ3VNsVFPPN/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5gs8nf4wojB5EXgDUWNLwXpknzgV2YWDhveAeBZpVLbp"),
      //   symbol: 'XTAG',
      //   name: 'xHashtag Token',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5gs8nf4wojB5EXgDUWNLwXpknzgV2YWDhveAeBZpVLbp/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("HNm1VgnyhaMZZF71RjNFNiYLN76zyZTDcBZPjYveWFXX"),
      //   symbol: 'FRENS',
      //   name: 'Chimp Frens',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HNm1VgnyhaMZZF71RjNFNiYLN76zyZTDcBZPjYveWFXX/chimp.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a"),
      //   symbol: 'RLB',
      //   name: 'Rollbit Coin',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/RLBxxFkseAZ4RgJH3Sqn8jXxhmGoz9jWxDNJMh8pL7a/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("H5euuuZXAuFak2NVTMu53fckdkHFWuJzXXb3TfKTrLWK"),
      //   symbol: 'DEV',
      //   name: 'DevCoin',
      //   logo: 'https://raw.githubusercontent.com/thedevdojo/devcoin/main/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GtMtXoJiqSf8Gfp83cuunnDTiJTeTmv7cniVtJ6UAMWH"),
      //   symbol: 'NVX',
      //   name: 'NovaDEX',
      //   logo: 'https://pbs.twimg.com/profile_images/1722623481987428352/b4gDEuuT_400x400.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("33MJjPS6H7P2nwD648uiTiUu8v5fJ1zKyjnVqeWZ344F"),
      //   symbol: 'WVE',
      //   name: 'everwave',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/33MJjPS6H7P2nwD648uiTiUu8v5fJ1zKyjnVqeWZ344F/logo.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("SNSNkV9zfG5ZKWQs6x4hxvBRV6s8SqMfSGCtECDvdMd"),
      //   symbol: 'SNS',
      //   name: 'SynesisOne',
      //   logo: 'https://raw.githubusercontent.com/Synesis-One/spl-token/main/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("BygDd5LURoqztD3xETc99WCxLUbTi6WYSht9XiBgZ4HW"),
      //   symbol: 'WMP',
      //   name: 'Whalemap',
      //   logo: 'https://raw.githubusercontent.com/ssi91/crypto/main/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4B619RbcXbXrKTzNVgDSRiUn9wfxWgA1w1oFLveGacNy"),
      //   symbol: 'HCOIN',
      //   name: 'Hydrogencoin',
      //   logo: 'https://raw.githubusercontent.com/dataalg/Hydrogen/main/4B619RbcXbXrKTzNVgDSRiUn9wfxWgA1w1oFLveGacNy/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("A98UDy7z8MfmWnTQt6cKjje7UfqV3pTLf4yEbuwL2HrH"),
      //   symbol: 'MODUL',
      //   name: 'Modul',
      //   logo: 'https://raw.githubusercontent.com/parametrise/ParametriseLogo/main/Modul_Logomark_White_Pinky_Background.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("F9CpWoyeBJfoRB8f2pBe2ZNPbPsEE76mWZWme3StsvHK"),
      //   symbol: 'PEPE',
      //   name: 'Pepe',
      //   logo: 'https://shdw-drive.genesysgo.net/8XiSN28HJqb9czfsBYXsTkLtf4wgAupLpozEaUyA419K/pepecoin.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("4LP5JKsyKC5pSAoodwcZnDCSK2ggsMcZvHKoo7HCPDCV"),
      //   symbol: '$SNOOPY',
      //   name: 'Snoopy',
      //   logo: 'https://bafkreih5phb36g46nyomg3gx6274wyhbgh4pyhax7noxpbhinirxtzcyum.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M"),
      //   symbol: 'SNTR',
      //   name: 'Sentre',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/SENBBKVCM7homnf5RX9zqpf1GFe935hnbU4uVzY1Y6M/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4xnxNjLkeVoJEAUFjj5xTvkdTLGYHtrdyyXThGDFhwmr"),
      //   symbol: 'GOFURS',
      //   name: 'GOFURS Del Sol',
      //   logo: 'https://arweave.net/X9m1CVUfzInuKry4cjZrarZE_omTtbwPXrSeaHvkvWE',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("6kwTqmdQkJd8qRr9RjSnUX9XJ24RmJRSrU1rsragP97Y"),
      //   symbol: 'SAIL',
      //   name: 'SAIL',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/6kwTqmdQkJd8qRr9RjSnUX9XJ24RmJRSrU1rsragP97Y/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("LGNDeXXXaDDeRerwwHfUtPBNz5s6vrn1NMSt9hdaCwx"),
      //   symbol: 'LEGEND',
      //   name: 'Legends of SOL',
      //   logo: 'https://arweave.net/sCGvXDlbFn8p0s0cfqtznbjn9K_cyYY2aa9HGC1XWR8',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE"),
      //   symbol: 'XCOPE',
      //   name: 'XCOPE',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/3K6rftdAaQYMPunrtNRHgnK2UAtjm2JwyT2oCiTDouYE/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 0
      // }
      // ,
      // {
      //   mint: new PublicKey("HDEqEpFgTrBawzDgTG1eyH8Go9PX84LCEC8Qjt8T4jFN"),
      //   symbol: 'BOTS',
      //   name: 'Skullbot Biker Gang',
      //   logo: 'https://cloudflare-ipfs.com/ipfs/bafybeifbl3x5iluraez46db4rdqdgay2z34s2bmqaydeszkej36xylljki/151.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("B6aJ3TGfme3SMnLSouHXqWXjVFqYyqj7czzhzr8WJFAi"),
      //   symbol: 'RAD',
      //   name: 'RAD',
      //   logo: 'https://raw.githubusercontent.com/NFTBrickLayer/zillaz-assets/main/RAD-logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 4
      // }
      // ,
      // {
      //   mint: new PublicKey("9gP2kCy3wA1ctvYWQk75guqXuHfrEomqydHLtcTCqiLa"),
      //   symbol: 'BNB',
      //   name: 'Binance Coin (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/BNB_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("8RYSc3rrS4X4bvBCtSJnhcpPpMaAJkXnVKZPzANxQHgz"),
      //   symbol: 'YARD',
      //   name: 'SolYard Finance',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/8RYSc3rrS4X4bvBCtSJnhcpPpMaAJkXnVKZPzANxQHgz/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3Gjckk5jXnJffBruUS2EEYhpiDEN6z5TPXLkFVHkSkkg"),
      //   symbol: 'IMARO',
      //   name: 'IMARO',
      //   logo: 'https://arweave.net/DHesbj9OXu_a4xL9XYw27lxuG67IrG7Uv0WOuTwu9mo',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("9gwTegFJJErDpWJKjPfLr2g2zrE3nL1v5zpwbtsk3c6P"),
      //   symbol: 'USEDCAR',
      //   name: 'A Gently Used 2001 Honda Civic',
      //   logo: 'https://gateway.irys.xyz/7TTPG48afTZE8Ioeaa4XlZ7F4Q5g4lLYkC7N1Yr1pFo',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5EbpXhW7t8ypBF3Q1X7odFaHjuh7XJfCohXR3VYAW32i"),
      //   symbol: 'MALL',
      //   name: 'MetaMall',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/5EbpXhW7t8ypBF3Q1X7odFaHjuh7XJfCohXR3VYAW32i/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 3
      // }
      // ,
      // {
      //   mint: new PublicKey("EcK2evV2cDECVsmvY2FxU51eu3fp4w48zrZxuA92AAAN"),
      //   symbol: 'FOOD',
      //   name: 'Food Token',
      //   logo: 'https://arweave.net/mq0Euf7EQja8Hr1s7TvhfzLi5GeDWMe3ryvnNJItP3c',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9tzZzEHsKnwFL1A3DyFJwj36KnZj3gZ7g4srWp9YTEoh"),
      //   symbol: 'ARB',
      //   name: 'ARB Protocol',
      //   logo: 'https://raw.githubusercontent.com/ARBProtocol/arbprotocol/main/IMG_3600.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("buMnhMd5xSyXBssTQo15jouu8VhuEZJCfbtBUZgRcuW"),
      //   symbol: 'NNI',
      //   name: 'NeoNomad',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/buMnhMd5xSyXBssTQo15jouu8VhuEZJCfbtBUZgRcuW/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("7unYePWUHcpB28cnS65TpqT2qqmZaftRz9QABkdR8yN7"),
      //   symbol: 'ZEBU',
      //   name: 'ZEBU',
      //   logo: 'https://bafybeifi5wr2k5giyoikp7hnyx5zsdlt37ez3qzav6y5nssrjzaxuxnedi.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("LPFiNAybMobY5oHfYVdy9jPozFBGKpPiEGoobK2xCe3"),
      //   symbol: 'LPFi',
      //   name: 'LP Finance DAO',
      //   logo: 'https://raw.githubusercontent.com/LP-Finance-Inc/token-image/main/LPFiToken.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AT79ReYU9XtHUTF5vM6Q4oa9K8w7918Fp5SU7G1MDMQY"),
      //   symbol: 'SPDR',
      //   name: 'SpiderSwap',
      //   logo: 'https://arweave.net/PAVQPYRQzq2g4O2X7hDzOniW4aBE9PJ19U56MRVpIfA',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("gmdu3snwW28DmmxCseChp9owWLUhamH9eS3hWfHG8Vg"),
      //   symbol: 'GMSOL',
      //   name: 'We Say gm',
      //   logo: 'https://github.com/icnivadmai/gm-logo/blob/master/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("3tS6fbLh2P8tzxXuqCiHZpZhsxJpmrR3Xb9psmypnp69"),
      //   symbol: 'pepe',
      //   name: 'pepecoin on SOL',
      //   logo: 'https://i.imgur.com/XzaFkn5.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("AMdnw9H5DFtQwZowVFr4kUgSXJzLokKSinvgGiUoLSps"),
      //   symbol: 'MOLA',
      //   name: 'MOONLANA',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/AMdnw9H5DFtQwZowVFr4kUgSXJzLokKSinvgGiUoLSps/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("HZNpqL7RT9gxf9eWoWsWzC5DfjzQ41XTQgEA7p3VzaaD"),
      //   symbol: 'TWT',
      //   name: 'Trust Wallet (Portal)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/HZNpqL7RT9gxf9eWoWsWzC5DfjzQ41XTQgEA7p3VzaaD/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("7NQSHjuEGENZDWfSvPZz7oP2D6c5Jc3LjFC6uh179ufr"),
      //   symbol: 'MOAI',
      //   name: ':moyai:(MOAI)',
      //   logo: 'https://node2.irys.xyz/z-DMnyxOt4FgHKdQq-05tIJOyarmt7Tg1QUqUeEOdew',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("5qKDWkBejLtRh1UGFV7e58QEkdn2fRyH5ehVXqUYujNW"),
      //   symbol: 'SCOIN',
      //   name: 'Sdrive Coin',
      //   logo: 'https://arweave.net/O5kTUpi6mNl-FWY2zq01MqK0qkwRKy3O5cyaoosyJwM',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("A12XggFFk3b5GCd6ZYxuQ55cQbxarHL4h7Jxs3GQcdC3"),
      //   symbol: 'Froggo',
      //   name: 'Froggo',
      //   logo: 'https://froggotoken.com/token_logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("4SZjjNABoqhbd4hnapbvoEPEqT8mnNkfbEoAwALf1V8t"),
      //   symbol: 'CAVE',
      //   name: 'Crypto Cavemen',
      //   logo: 'https://ftoblquxiunjey7bu4eevlz2u7kwg5s3yvou7adgge2jbihcu7qq.arweave.net/LNwVwpdFGpJj4acISq86p9VjdlvFXU-AZjE0kKDip-E/?ext=png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("F3nefJBcejYbtdREjui1T9DPh5dBgpkKq7u2GAAMXs5B"),
      //   symbol: 'AART',
      //   name: 'ALL ART',
      //   logo: 'https://raw.githubusercontent.com/allartprotocol/token-list/main/assets/mainnet/F3nefJBcejYbtdREjui1T9DPh5dBgpkKq7u2GAAMXs5B/logo.jpg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("427xvZVKbFj7ZyfFoYS9iFpNuNsrijm6T9VP8znfko9j"),
      //   symbol: 'SAUCE',
      //   name: 'SAUCE',
      //   logo: 'https://golxb67pwrvlfxe44zvsvl25lhkb6hhk3xwhwqasfgpwcovn62ba.arweave.net/M5dw---0arLcnOZrKq9dWdQfHOrd7HtAEimfYTqt9oI',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("RoLLn5qBN4juQ1D2KFpJyAcC7Deo3cYotXi4qDooHLU"),
      //   symbol: 'ROL',
      //   name: 'ROL',
      //   logo: 'https://assets.blockstars.gg/static/ROL.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("HZRCwxP2Vq9PCpPXooayhJ2bxTpo5xfpQrwB1svh332p"),
      //   symbol: 'LDO',
      //   name: 'Lido DAO (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/LDO_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 8
      // }
      // ,
      // {
      //   mint: new PublicKey("AYABiqKuTh9Va5Aqc6AujFevHwDGmECGQiFmKW5g3K4Z"),
      //   symbol: 'LONG',
      //   name: 'Nobiko Coin',
      //   logo: 'https://ibb.co/PNCn53H',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 5
      // }
      // ,
      // {
      //   mint: new PublicKey("7EYnhQoR9YM3N7UoaKRoA44Uy8JeaZV3qyouov87awMs"),
      //   symbol: 'SILLY',
      //   name: 'Silly Dragon',
      //   logo: 'https://gateway.irys.xyz/quusRf1O-_WcCbrFwHkbIZ26vxQ1xJZeQdsaKRITVNQ',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FcScaNdN3TRPMwcgqHj1E5GuEh1rNesBGVN5WtZuad1z"),
      //   symbol: 'TWTR',
      //   name: 'Twitter',
      //   logo: 'https://ipfs.io/ipfs/QmcjVdSFfWsecrqusiviGb2HJri4PKJjLs8fa3hzycv3xL',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FTT9rBBrYwcHam4qLvkzzzhrsihYMbZ3k6wJbdoahxAt"),
      //   symbol: 'sFTT-9',
      //   name: 'Saber Wrapped Wrapped FTT (Sollet) (9 decimals)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/FTT9rBBrYwcHam4qLvkzzzhrsihYMbZ3k6wJbdoahxAt/icon.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("CYuXNHURE8cF3rQc1687DZnmsWx9ATNG3mZPFmryu22S"),
      //   symbol: 'PEPE',
      //   name: 'PEPESOLANA',
      //   logo: 'https://shdw-drive.genesysgo.net/85Mup8SQSvcTXsykzNTAtypV2v3zYrYu9eFTRvUUwmXK/logopep200x200.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("9vMJfxuKxXBoEa7rM12mYLMwTacLMLDJqHozw96WQL8i"),
      //   symbol: 'UST',
      //   name: 'UST (Portal)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/UST_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("ARg9wfeLN4qZTxgYTYeuGtGFMmYdk5zFhBuSnTfXXUvb"),
      //   symbol: 'CHI',
      //   name: 'Project Paradise - CHI Token',
      //   logo: 'https://raw.githubusercontent.com/benthebape/projekt-paradise-chi-token/main/Moneda_1.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("Dn4noZ5jgGfkntzcQSUZ8czkreiZ1ForXYoV2H8Dm7S1"),
      //   symbol: 'USDTet',
      //   name: 'Tether USD (Portal from Ethereum)',
      //   logo: 'https://raw.githubusercontent.com/wormhole-foundation/wormhole-token-list/main/assets/USDTet_wh.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("PRiME7gDoiG1vGr95a3CRMv9xHY7UGjd4JKvfSkmQu2"),
      //   symbol: 'PRIME',
      //   name: 'SolanaPrime',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/PRiME7gDoiG1vGr95a3CRMv9xHY7UGjd4JKvfSkmQu2/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("DeaKMzAeZja3Mh5okZE6WUvygLP3Lfuvm6Rg78HqXTz9"),
      //   symbol: 'SOLNIC',
      //   name: 'Solnic',
      //   logo: 'https://gateway.irys.xyz/y0Hlgi1BbUfWCfJ2a407UrlViwN0Fa3cjLikgrVCpWI',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("LFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp"),
      //   symbol: 'LFNTY',
      //   name: 'Lifinity',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/LFNTYraetVioAPnGJht4yNg2aUZFXR776cMeN9VMjXp/logo.svg',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ"),
      //   symbol: 'DUAL',
      //   name: 'Dual DAO Token',
      //   logo: 'https://www.dual.finance/images/token-logos/dual.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("G7eETAaUzmsBPKhokZyfbaT4tD9igdZSmfQGEYWem8Sw"),
      //   symbol: 'EYE',
      //   name: 'NftEyez Coin',
      //   logo: 'https://raw.githubusercontent.com/NftEyez/assets/main/assets/eye-coin.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 6
      // }
      // ,
      // {
      //   mint: new PublicKey("8Yv9Jz4z7BUHP68dz8E8m3tMe6NKgpMUKn8KVqrPA6Fr"),
      //   symbol: 'aaUSDC',
      //   name: 'Wrapped USDC (Allbridge from Avalanche)',
      //   logo: 'https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v/logo.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("FmoKY2ERGmE9NzrYphAJcqH5BPRy2Hs4VomRfu8Qgt7Y"),
      //   symbol: 'MONKES',
      //   name: 'Solana Monkey Business',
      //   logo: 'https://img-cdn.magiceden.dev/rs:fill:400:400:0:0/plain/https://i.imgur.com/bMH6qNc.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 2
      // }
      // ,
      // {
      //   mint: new PublicKey("xyzR4s6H724bUq6q7MTqWxUnhi8LM5fiKKUq38h8M1P"),
      //   symbol: 'SHROOM',
      //   name: 'Shroom',
      //   logo: 'https://bafkreigoe2lb5utcb4xcneknfgh4b37wptis2n43tuegjye4ydwpw273hm.ipfs.nftstorage.link',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      // ,
      // {
      //   mint: new PublicKey("GDfnEsia2WLAW5t8yx2X5j2mkfA74i5kwGdDuZHt7XmG"),
      //   symbol: 'CROWN',
      //   name: 'CROWN Token',
      //   logo: 'https://shdw-drive.genesysgo.net/AwJ6W2rRaYCGXimceFuLm5td14fhN1VFEfSYg566RxMD/image.png',
      //   balance: 0,
      //   uiAmount: 0,
      //   decimals: 9
      // }
      
]