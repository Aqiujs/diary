// 依赖
import React, { useEffect, forwardRef, useRef, useCallback } from 'react';
// 插件 
import BScroll from '@better-scroll/core';
import Pullup from '@better-scroll/pull-up';
// 封装滚动插件（better-scroll）
function Better(props,ref){
  const betterRef = useRef(null);

  const init = useCallback((dom)=>{
    console.log('我init函数的入参',dom);
    console.log('我是父组件传过来的值',props);
    console.log('我是要传出去的值',ref);

    BScroll.use(Pullup);
    const bs = new BScroll(dom,{
      ...props.configuration
    });
  
    props.events?.forEach(event=>{
      bs.on(event.name,()=>{event.func()});
    });

    ref.current.refresh = ()=>{ bs.refresh() };
    ref.current.finishPullUp = ()=>{ bs.finishPullUp() };

    return bs;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[props]);

  useEffect(()=>{
    ref.current.bs = init(betterRef.current);
    // eslint-disable-next-line 
  },[]);

  return (
    <div ref={betterRef}
      className="Better"
      style={{
        width: '100%',
        height: '100%'
      }}>
      <div className="content"
        style={{overflow: 'hidden'}}>
        {props.children}
      </div>
    </div>
  )
}

export default forwardRef(Better);
