from sympy import *
from math import *
import numpy as np

def RK44(u,h1,h2,o1,o2,apha,gm,bt,T,Np,id):
    lista=[]
    xi=0
    h=T/Np
    w5 = [u]
    w1 = [h1]
    w2 = [h2]
    w3 = [o1]
    w4 = [o2]
    ph = [h1+o1+0.5*(h2+o2)]
    qh = [u+0.5*(h2+o2)]
    ti = [xi]
    l=(xi,u,h1,h2,o1,o2)
    lista.append(l)
    for i in range(1,int(Np)+1):

        k11=h*E2(ti[i-1],w1[i-1],w2[i-1],w3[i-1],w4[i-1],apha,gm,bt,id);
        k12=h*E3(ti[i-1],w1[i-1],w2[i-1],w3[i-1],w4[i-1],apha,gm,bt,id);
        k13=h*E4(ti[i-1],w1[i-1],w2[i-1],w3[i-1],w4[i-1],apha,gm,bt,id);
        k14=h*E5(ti[i-1],w1[i-1],w2[i-1],w3[i-1],w4[i-1],apha,gm,bt,id);


        k21=h*E2(ti[i-1]+h*0.5,w1[i-1]+k11*0.5,w2[i-1]+k12*0.5,w3[i-1]+k13*0.5,
        w4[i-1]+k14*0.5,apha,gm,bt,id);
        k22=h*E3(ti[i-1]+h*0.5,w1[i-1]+k11*0.5,w2[i-1]+k12*0.5,w3[i-1]+k13*0.5,
        w4[i-1]+k14*0.5,apha,gm,bt,id);
        k23=h*E4(ti[i-1]+h*0.5,w1[i-1]+k11*0.5,w2[i-1]+k12*0.5,w3[i-1]+k13*0.5,
        w4[i-1]+k14*0.5,apha,gm,bt,id);
        k24=h*E5(ti[i-1]+h*0.5,w1[i-1]+k11*0.5,w2[i-1]+k12*0.5,w3[i-1]+k13*0.5,
        w4[i-1]+k14*0.5,apha,gm,bt,id);


        k31=h*E2(ti[i-1]+h*0.5,w1[i-1]+k21*0.5,w2[i-1]+k22*0.5,w3[i-1]+k23*0.5,
        w4[i-1]+k24*0.5,apha,gm,bt,id);
        k32=h*E3(ti[i-1]+h*0.5,w1[i-1]+k21*0.5,w2[i-1]+k22*0.5,w3[i-1]+k23*0.5,
        w4[i-1]+k24*0.5,apha,gm,bt,id);
        k33=h*E4(ti[i-1]+h*0.5,w1[i-1]+k21*0.5,w2[i-1]+k22*0.5,w3[i-1]+k23*0.5,
        w4[i-1]+k24*0.5,apha,gm,bt,id);
        k34=h*E5(ti[i-1]+h*0.5,w1[i-1]+k21*0.5,w2[i-1]+k22*0.5,w3[i-1]+k23*0.5,
        w4[i-1]+k24*0.5,apha,gm,bt,id);


        k41=h*E2(ti[i-1]+h*0.5,w1[i-1]+k31,w2[i-1]+k32,w3[i-1]+k33,w4[i-1]+k34,
        apha,gm,bt,id);
        k42=h*E3(ti[i-1]+h*0.5,w1[i-1]+k31,w2[i-1]+k32,w3[i-1]+k33,w4[i-1]+k34,
        apha,gm,bt,id);
        k43=h*E4(ti[i-1]+h*0.5,w1[i-1]+k31,w2[i-1]+k32,w3[i-1]+k33,w4[i-1]+k34,
        apha,gm,bt,id);
        k44=h*E5(ti[i-1]+h*0.5,w1[i-1]+k31,w2[i-1]+k32,w3[i-1]+k33,w4[i-1]+k34,
        apha,gm,bt,id);

        x2=w1[i-1] + (k11 + 2*k21 + 2*k31 + k41)/6
        x3=w2[i-1] + (k12 + 2*k22 + 2*k32 + k42)/6
        x4=w3[i-1] + (k13 + 2*k23 + 2*k33 + k43)/6
        x5=w4[i-1] + (k14 + 2*k24 + 2*k34 + k44)/6
        x1=1-x2-x3-x4-x5
    #------------------------#
        p=x2+x4+(x3+x5)*0.5
        q=x1+(x3+x5)*0.5
#----Calculo de las frecuecnias ---- #
        ph = np.append(ph,p)
        qh = np.append(qh,q)
######################################3
        w1 = np.append(w1,x2)
        w2 = np.append(w2,x3)
        w3 = np.append(w3,x4)
        w4 = np.append(w4,x5)
        w5 = np.append(w5,x1)

        ti = np.append(ti,xi+i*h)

        l=(round(xi+i*h,3),round(x1,9),round(x2,9),round(x3,9),round(x4,9),
        round(x5,9))
        lista.append(l)
    return (ti,w5,w1,w2,w3,w4,lista,ph,qh)



def E2(t,h1,h2,o1,o2,apha,gm,bt,id):
    if id=="2":
        r=h1*(o1+o2-(bt+apha))+apha*(h1+o1+0.5*h2+o2*0.5)**2
    if id=="4":
        r=(h1*(h1+2*o1+h2+o2)+o1*(o1+h2+o2)+(0.5*h2+0.5*o2)*(0.5*h2+0.5*o2))*apha+gm*(h1+h2)*o1+(-bt+bt*(h1+h2)-apha+o1+o2)*h1
    return r
def E3(t,h1,h2,o1,o2,apha,gm,bt,id):
    if id=="2":
        r=h2*(o1+o2-(bt+apha))+2*(h1+o1+0.5*h2+o2*0.5)*(1-h1-o1-0.5*h2-0.5*o2)*apha
    if id=="4":
        r=(2*(h1+o1+0.5*h2+0.5*o2)*(1-(h1+o1+0.5*h2+o2*0.5)))*apha+gm*(h1+h2)*o2+(-bt+bt*(h1+h2)-apha+o1+o2)*h2
    return r
def E4(t,h1,h2,o1,o2,apha,gm,bt,id):
    if id=="2":
        r=o1*(o1+o2-(1+apha))+bt*h1
    if id=="4":
        r=bt*(1-h1-h2)*h1+(-gm*(h1+h2)-apha-1+o1+o2)*o1
    return r
def E5(t,h1,h2,o1,o2,apha,gm,bt,id):
    if id=="2":
        r=o2*(o1+o2-(1+apha))+bt*h2
    if id=="4":
        r= bt*(1-h1-h2)*h2+(-gm*(h1+h2)-apha-1+o1+o2)*o2
    return r
