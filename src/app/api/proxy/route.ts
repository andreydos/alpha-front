// // /app/api/proxy/route.ts
// import { NextRequest, NextResponse } from 'next/server';
// import { createProxyMiddleware } from 'http-proxy-middleware';
//
// const proxy = createProxyMiddleware({
// 	target: 'https://test.alphamedia.club/api',
// 	changeOrigin: true,
// 	pathRewrite: {
// 		'^/api/proxy': '',
// 	},
// });
//
// export async function GET(request: NextRequest) {
// 	return new Promise((resolve, reject) => {
// 		proxy(request, {}, (result) => {
// 			if (result instanceof Error) {
// 				console.log('===GET')
//
// 				reject(result);
// 			} else {
// 				resolve(new NextResponse(result));
// 			}
// 		});
// 	});
// }
//
// export async function POST(request: NextRequest) {
// 	return new Promise((resolve, reject) => {
// 		proxy(request, {}, (result) => {
// 			console.log('===POST')
// 			if (result instanceof Error) {
// 				reject(result);
// 			} else {
// 				resolve(new NextResponse(result));
// 			}
// 		});
// 	});
// }
//
// export const config = {
// 	runtime: 'nodejs', // Используем Node.js runtime
// };
