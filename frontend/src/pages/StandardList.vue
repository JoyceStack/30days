<template>
  <div>
    <a-card :bordered="false">
      <a-row>
        <a-col :sm="8" :xs="24">
          <head-info title="我的任务" content="5" :bordered="true"/>
        </a-col>
        <a-col :sm="8" :xs="24">
          <head-info title="本周打卡次数" content="24"/>
        </a-col>
        <a-col :sm="8" :xs="24">
          <head-info title="本周打卡人数" content="2"/>
        </a-col>
      </a-row>
    </a-card>
    <a-card
      style="margin-top: 24px"
      :bordered="false"
      title="任务列表"
    >
      <!-- <div slot="extra">
        <a-radio-group>
          <a-radio-button>全部</a-radio-button>
          <a-radio-button>进行中</a-radio-button>
          <a-radio-button>等待中</a-radio-button>
        </a-radio-group>
        <a-input-search style="margin-left: 16px; width: 272px;" />
      </div> -->
      <a-button type="dashed" style="width: 100%" icon="plus">添加</a-button>
      <a-list size="large" :pagination="{showSizeChanger: true, showQuickJumper: true, pageSize: 5, total: 50}">
        <a-list-item :key="i" v-for="i in 5">
          <a-list-item-meta
            description="30天 每天坚持走10000步沙发温柔iuqweoiruqwoieurqwerouqwoieruqwerqweruoqiweur">
            <a slot="title">10000步</a>
          </a-list-item-meta>
          <div slot="actions">
            <a>打卡</a>
          </div>
          <div slot="actions">
            <a-dropdown>
              <a>更多<a-icon type="down"/></a>
              <a-menu slot="overlay">
                <a-menu-item><a>编辑</a></a-menu-item>
                <a-menu-item><a>删除</a></a-menu-item>
              </a-menu>
            </a-dropdown>
          </div>
          <div class="list-content">
            <div class="list-content-item">
              <span>Owner</span>
              <p>包辰</p>
              <p>郭登鹏</p>
            </div>
            <div class="list-content-item">
              <span>开始时间</span>
              <p>2018-07-26</p>
            </div>
            <div class="list-content-item">
              <a-progress :percent="80" style="width: 180px" />
            </div>
          </div>
        </a-list-item>
      </a-list>
    </a-card>
  </div>
</template>

<script>
import HeadInfo from '@/components/tool/HeadInfo'
export default {
  name: 'StandardList',
  components: { HeadInfo }
}
</script>

<style lang="less" scoped>
  .ant-avatar-lg{
    width: 48px;
    height: 48px;
    line-height: 48px;
  }
  .list-content-item{
    color: rgba(0,0,0,.45);
    display: inline-block;
    vertical-align: middle;
    font-size: 14px;
    margin-left: 40px;
    span{
      line-height: 20px;
    }
    p{
      margin-top: 4px;
      margin-bottom: 0;
      line-height: 22px;
    }
  }
</style>
