import React from 'react';
import style from './index.module.less';

export const MusicHeader: React.FC = () => (
    <header className={style.headerMusic}>
        <span className='tabMusic'>推荐音乐</span>
        <span className='tabTop'>热歌榜</span>
        <span className='tabSearch'>搜索</span>
    </header>
);
