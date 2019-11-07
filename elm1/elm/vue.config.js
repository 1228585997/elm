module.exports = {
        css: {
        loaderOptions: {
               css: {
               },
         postcss: {
                    plugins: [require('postcss-px2rem')({
                              remUnit: 64
                    })]
               }
          }
      },
	  // devServer:{
	  // 	   proxy:{
	  // 		   '/weatherApi':{
	  // 			   target:'https://www.apiopen.top/',
	  // 			   ws: true,
	  // 			   changeOrigin: true
	  // 		   }
	  // 	   }
	  // }
}