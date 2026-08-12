#include <bits/stdc++.h>
using namespace std;

struct BIT{
    int n; vector<int> t;
    BIT(int n=0):n(n),t(n+1){}
    void add(int i,int v){ for(++i;i<=n;i+=i&-i)t[i]+=v; }
    int sum(int i){ int r=0; for(;i>0;i-=i&-i)r+=t[i]; return r; }
    int kth(int k){
        int x=0;
        for(int b=1<<20;b;b>>=1) if(x+b<=n&&t[x+b]<k) k-=t[x+=b];
        return x;
    }
};

int main(){
    ios::sync_with_stdio(false);
    cin.tie(nullptr);

    ifstream in("S.txt");
    string s; in>>s;
    int n=s.size(), m=2*n+1, L, H;
    cin>>L>>H;

    auto val=[&](char c){
        c=tolower(c);
        if(c=='a') return 2;
        if(c=='c') return 3;
        if(c=='g') return 4;
        return 5;
    };
    auto comp=[&](char c){
        c=tolower(c);
        if(c=='a') return 't';
        if(c=='t') return 'a';
        if(c=='c') return 'g';
        return 'c';
    };

    vector<int>a(m),sa(m),r(m),tmp(m),lcp(m);
    for(int i=0;i<n;i++) a[i]=val(s[i]);
    a[n]=1;
    for(int i=0;i<n;i++) a[n+1+i]=val(comp(s[n-1-i]));

    for(int i=0;i<m;i++) r[i]=a[i];
    vector<int> y(m),cnt(max(300,m)+1);
    int mx0=max(300,m);
    fill(cnt.begin(),cnt.begin()+mx0+1,0);
    for(int x:r) cnt[x]++;
    for(int i=1;i<=mx0;i++) cnt[i]+=cnt[i-1];
    for(int i=m-1;i>=0;i--) sa[--cnt[r[i]]]=i;
    for(int k=1;;k<<=1){
        int p=0;
        for(int i=m-k;i<m;i++) y[p++]=i;
        for(int i=0;i<m;i++) if(sa[i]>=k) y[p++]=sa[i]-k;
        int mx=max(300,m);
        fill(cnt.begin(),cnt.begin()+mx+1,0);
        for(int x:y) cnt[r[x]]++;
        for(int i=1;i<=mx;i++) cnt[i]+=cnt[i-1];
        for(int i=m-1;i>=0;i--) sa[--cnt[r[y[i]]]]=y[i];
        tmp[sa[0]]=1; p=1;
        for(int i=1;i<m;i++){
            int x=sa[i-1], z=sa[i];
            if(r[x]!=r[z] || (x+k<m?r[x+k]:0)!=(z+k<m?r[z+k]:0)) p++;
            tmp[z]=p;
        }
        r.swap(tmp);
        if(p==m) break;
    }

    for(int i=0;i<m;i++) tmp[sa[i]]=i;
    for(int i=0,h=0;i<m;i++){
        int q=tmp[i];
        if(!q) continue;
        int j=sa[q-1];
        while(i+h<m&&j+h<m&&a[i+h]==a[j+h]) h++;
        lcp[q]=h;
        if(h) h--;
    }

    BIT bit(n);
    array<int,4> ans;
    auto better=[&](array<int,4>x,array<int,4>y){
        if(y[0]<0) return true;
        return x<y;
    };

    auto check=[&](int len,bool keep){
        array<int,4> best={-1,-1,-1,-1};
        if(len<=0) return best;
        for(int l=0;l<m;){
            int rr=l;
            while(rr+1<m && lcp[rr+1]>=len) rr++;
            if(rr>l){
                vector<int> add, left;
                for(int i=l;i<=rr;i++){
                    int p=sa[i];
                    if(p<n && p+len<=n) left.push_back(p);
                    else if(p>n){
                        int t=p-n-1;
                        if(t+len<=n) add.push_back(t), bit.add(t,1);
                    }
                }
                for(int i:left){
                    int lo=n-2*len-H-i, hi=n-2*len-L-i;
                    lo=max(lo,0); hi=min(hi,n-len);
                    if(lo<=hi && bit.sum(hi+1)>bit.sum(lo)){
                        int t=bit.kth(bit.sum(hi+1));
                        int j=n-len-t;
                        array<int,4> cur={i+1,i+len,j+1,j+len};
                        if(better(cur,best)) best=cur;
                    }
                }
                for(int t:add) bit.add(t,-1);
            }
            l=rr+1;
        }
        return best;
    };

    int lo=1,hi=(n-L)/2,best=0;
    while(lo<=hi){
        int mid=(lo+hi)/2;
        if(check(mid,false)[0]>=0) best=mid,lo=mid+1;
        else hi=mid-1;
    }
    if(!best) cout<<0<<"\n";
    else{
        ans=check(best,true);
        cout<<ans[0]<<' '<<ans[1]<<' '<<ans[2]<<' '<<ans[3]<<"\n";
    }
}
