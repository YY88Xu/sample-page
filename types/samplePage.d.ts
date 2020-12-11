import Vue from 'vue';
declare class SamplePage extends Vue{
    zoomList: number[];
    height: string;
    changePage(params: number): void;
}

export as namespace SamplePage

export = SamplePage