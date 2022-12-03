{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };

  type VideoMetaData = Omit<Video, 'url' | 'data'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'www.dasdaklslk.com',
      data: 'byte0qwe=zxczxcdf-qwerqm,zmxc-qwerm,xc,mzcm,',
    };
  }
  // 모든 비디오 정보가 아닌 Meta 정보만 가져오는 API
  function getVideoMetaData(id: string): VideoMetaData {
    return {
      id: '1',
      title: '새로운 희망',
    };
  }
}
