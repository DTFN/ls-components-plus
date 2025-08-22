export function claimPrivilegePosterListApi() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({
        records: [
          {
            id: '2',
            type: 1,
            version: 'V1.0',
            versionExplain: '<p>【V1.0】</p><p>更新时间：2025-06-11</p><p>更新内容：增值包初始化版本</p>',
            posterImage: [
              {
                fileKey: '权益海报-6rjGwFovmyQZWM8Yew-KJhjLc4dR9LZRURGeA.jpg',
                fileUrl:
                  'https://zlst-cldp-test-tos01.tos-s3-cn-shanghai.volces.com/%E6%9D%83%E7%9B%8A%E6%B5%B7%E6%8A%A5-6rjGwFovmyQZWM8Yew-KJhjLc4dR9LZRURGeA.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKLTNzM0MTAzMjgxOWY1NDM5Nzk4ZDk5NGZiNmIyNzljZjQ%2F20250822%2Fcn-shanghai%2Fs3%2Faws4_request&X-Amz-Date=20250822T021305Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=4568c50fa1312d2550f552a5ef1898560ff86d85ef0a45a311d88e111155e571'
              }
            ],
            createdTime: '2025-07-10 11:55:36',
            updatedTime: '2025-08-01 09:21:35',
            createdBy: '丁杰',
            updatedBy: '李萧杰'
          },
          {
            id: '1',
            type: 0,
            version: 'V1.1',
            versionExplain:
              '<p>【V1.1】</p><p>更新时间：2025-07-08</p><p>更新内容：尊享包海报版式调整优化</p><p><br></p><p>【V1.0】</p><p>更新时间：2025-06-11</p><p>更新内容：尊享包初始化版本</p><p><br></p>',
            posterImage: [
              {
                fileKey: '权益海报-6rjGwFovmyQZWM8Yew.jpg',
                fileUrl:
                  'https://zlst-cldp-test-tos01.tos-s3-cn-shanghai.volces.com/%E6%9D%83%E7%9B%8A%E6%B5%B7%E6%8A%A5-6rjGwFovmyQZWM8Yew.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKLTNzM0MTAzMjgxOWY1NDM5Nzk4ZDk5NGZiNmIyNzljZjQ%2F20250822%2Fcn-shanghai%2Fs3%2Faws4_request&X-Amz-Date=20250822T021305Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=c493d1d8f1f00fc94f52a364142609d2f8174b2c04f98071d74cd530a888b33e'
              }
            ],
            createdTime: '2025-07-07 16:43:00',
            updatedTime: '2025-07-31 11:00:11',
            createdBy: '李萧杰',
            updatedBy: '李萧杰'
          }
        ]
      });
    }, 40);
  });
}
