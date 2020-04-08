from sympy import *
from math import *
import numpy as np

def RK13(u,h1,h2,o1,o2,apha,gm,bt,p,q,m1,m2,T,Np,id):
    lista=[]
    xi=0
    h=T/Np
    w1 = [u]
    w2 = [h1]
    w3 = [h2]
    w4 = [o1]
    w5 = [o2]
    ti = [xi]

    l=(xi,u,h1,h2,o1,o2)
    lista.append(l)
    for i in range(1,int(Np)+1):

        k11=h*E1(ti[i-1],w1[i-1],w2[i-1],w3[i-1],w4[i-1],w5[i-1],apha,gm,bt,p,q,m1,m2,id);
        k12=h*E2(ti[i-1],w1[i-1],w2[i-1],w3[i-1],w4[i-1],w5[i-1],apha,gm,bt,p,q,m1,m2,id);
        k13=h*E3(ti[i-1],w1[i-1],w2[i-1],w3[i-1],w4[i-1],w5[i-1],apha,gm,bt,p,q,m1,m2,id);
        k14=h*E4(ti[i-1],w1[i-1],w2[i-1],w3[i-1],w4[i-1],w5[i-1],apha,gm,bt,p,q,m1,m2,id);
        k15=h*E5(ti[i-1],w1[i-1],w2[i-1],w3[i-1],w4[i-1],w5[i-1],apha,gm,bt,p,q,m1,m2,id);

        k21=h*E1(ti[i-1]+h*0.5,w1[i-1]+k11*0.5,w2[i-1]+k12*0.5,w3[i-1]+k13*0.5,
        w4[i-1]+k14*0.5,w5[i-1]+k15*0.5,apha,gm,bt,p,q,m1,m2,id);
        k22=h*E2(ti[i-1]+h*0.5,w1[i-1]+k11*0.5,w2[i-1]+k12*0.5,w3[i-1]+k13*0.5,
        w4[i-1]+k14*0.5,w5[i-1]+k15*0.5,apha,gm,bt,p,q,m1,m2,id);
        k23=h*E3(ti[i-1]+h*0.5,w1[i-1]+k11*0.5,w2[i-1]+k12*0.5,w3[i-1]+k13*0.5,
        w4[i-1]+k14*0.5,w5[i-1]+k15*0.5,apha,gm,bt,p,q,m1,m2,id);
        k24=h*E4(ti[i-1]+h*0.5,w1[i-1]+k11*0.5,w2[i-1]+k12*0.5,w3[i-1]+k13*0.5,
        w4[i-1]+k14*0.5,w5[i-1]+k15*0.5,apha,gm,bt,p,q,m1,m2,id);
        k25=h*E5(ti[i-1]+h*0.5,w1[i-1]+k11*0.5,w2[i-1]+k12*0.5,w3[i-1]+k13*0.5,
        w4[i-1]+k14*0.5,w5[i-1]+k15*0.5,apha,gm,bt,p,q,m1,m2,id);


        k31=h*E1(ti[i-1]+h*0.5,w1[i-1]+k21*0.5,w2[i-1]+k22*0.5,w3[i-1]+k23*0.5,
        w4[i-1]+k24*0.5,w5[i-1]+k25*0.5,apha,gm,bt,p,q,m1,m2,id);
        k32=h*E2(ti[i-1]+h*0.5,w1[i-1]+k21*0.5,w2[i-1]+k22*0.5,w3[i-1]+k23*0.5,
        w4[i-1]+k24*0.5,w5[i-1]+k25*0.5,apha,gm,bt,p,q,m1,m2,id);
        k33=h*E3(ti[i-1]+h*0.5,w1[i-1]+k21*0.5,w2[i-1]+k22*0.5,w3[i-1]+k23*0.5,
        w4[i-1]+k24*0.5,w5[i-1]+k25*0.5,apha,gm,bt,p,q,m1,m2,id);
        k34=h*E4(ti[i-1]+h*0.5,w1[i-1]+k21*0.5,w2[i-1]+k22*0.5,w3[i-1]+k23*0.5,
        w4[i-1]+k24*0.5,w5[i-1]+k25*0.5,apha,gm,bt,p,q,m1,m2,id);
        k35=h*E5(ti[i-1]+h*0.5,w1[i-1]+k21*0.5,w2[i-1]+k22*0.5,w3[i-1]+k23*0.5,
        w4[i-1]+k24*0.5,w5[i-1]+k25*0.5,apha,gm,bt,p,q,m1,m2,id);


        k41=h*E1(ti[i-1]+h*0.5,w1[i-1]+k31,w2[i-1]+k32,w3[i-1]+k33,w4[i-1]+k34,
        w5[i-1]+k35,apha,gm,bt,p,q,m1,m2,id);
        k42=h*E2(ti[i-1]+h*0.5,w1[i-1]+k31,w2[i-1]+k32,w3[i-1]+k33,w4[i-1]+k34,
        w5[i-1]+k35,apha,gm,bt,p,q,m1,m2,id);
        k43=h*E3(ti[i-1]+h*0.5,w1[i-1]+k31,w2[i-1]+k32,w3[i-1]+k33,w4[i-1]+k34,
        w5[i-1]+k35,apha,gm,bt,p,q,m1,m2,id);
        k44=h*E4(ti[i-1]+h*0.5,w1[i-1]+k31,w2[i-1]+k32,w3[i-1]+k33,w4[i-1]+k34,
        w5[i-1]+k35,apha,gm,bt,p,q,m1,m2,id);
        k45=h*E5(ti[i-1]+h*0.5,w1[i-1]+k31,w2[i-1]+k32,w3[i-1]+k33,w4[i-1]+k34,
        w5[i-1]+k35,apha,gm,bt,p,q,m1,m2,id);

        x1=w1[i-1] + (k11 + 2*k21 + 2*k31 + k41)/6
        x2=w2[i-1] + (k12 + 2*k22 + 2*k32 + k42)/6
        x3=w3[i-1] + (k13 + 2*k23 + 2*k33 + k43)/6
        x4=w4[i-1] + (k14 + 2*k24 + 2*k34 + k44)/6
        x5=w5[i-1] + (k15 + 2*k25 + 2*k35 + k45)/6

        w1 = np.append(w1,x1)
        w2 = np.append(w2,x2)
        w3 = np.append(w3,x3)
        w4 = np.append(w4,x4)
        w5 = np.append(w5,x5)

        ti = np.append(ti,xi+i*h)

        l=(round(xi+i*h,3),round(x1,9),round(x2,9),round(x3,9),round(x4,9),
        round(x5,9))
        lista.append(l)
    return (ti,w1,w2,w3,w4,w5,lista)



def E1(t,u,h1,h2,o1,o2,apha,gm,bt,p,q,m1,m2,id):
    r=(apha*q**2-m1)*u+(apha*q**2)*h1+(apha*q**2)*h2+(apha*q**2)*o1+(apha*q**2)*o2
    return r
def E2(t,u,h1,h2,o1,o2,apha,gm,bt,p,q,m1,m2,id):
    r=(apha*p**2)*u+(apha*p**2-bt-m1)*h1+(apha*p**2)*h2+(apha*p**2)*o1+(apha*p**2)*o2
    return r
def E3(t,u,h1,h2,o1,o2,apha,gm,bt,p,q,m1,m2,id):
    r=(2*p*q*apha)*u+(2*p*q*apha)*h1+(2*p*q*apha-bt-m1)*h2+(2*p*q*apha)*o1+(2*p*q*apha)*o2
    return r
def E4(t,u,h1,h2,o1,o2,apha,gm,bt,p,q,m1,m2,id):
    r=bt*h1-m2*o1
    return r
def E5(t,u,h1,h2,o1,o2,apha,gm,bt,p,q,m1,m2,id):
    r=bt*h2-m2*o2
    return r
